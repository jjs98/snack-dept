import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';

import { TranslateService } from '../../../services/translate.service';
import { UserStore } from '../../../store/user.store';
import { UserDto } from '../../api/models';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    ListboxModule,
    RadioButtonModule,
    TooltipModule,
  ],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent {
  protected readonly userStore = inject(UserStore);
  protected readonly translations = inject(TranslateService).translations;
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);

  protected name: string | undefined = undefined;

  protected dialogVisible = signal(false);
  protected existingUser: UserDto | undefined = undefined;

  private isEdit = false;

  constructor() {
    effect(() => {
      if (!this.dialogVisible()) {
        this.resetDialog();
      }
    });
  }

  public showDialog(userDto: UserDto | undefined = undefined): void {
    if (userDto) {
      this.isEdit = true;
      this.name = userDto.name;
      this.existingUser = userDto;
    }

    this.dialogVisible.set(true);
  }

  protected onCancel(): void {
    this.dialogVisible.set(false);
  }

  protected async onSave(): Promise<void> {
    if (!this.name || this.name === '') {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill out all fields',
      });
      return;
    }

    if (this.isEdit) {
      await this.editUser();
    } else {
      await this.addUser();
    }
  }

  protected async onKeyPress(event: KeyboardEvent): Promise<void> {
    if (event.key === 'Enter' && this.name !== '') {
      await this.onSave();
    }
  }

  protected hasUserChanged(): boolean {
    const user = this.existingUser;
    if (!user) {
      return true;
    }

    return this.name != user.name;
  }

  protected async confirmDeleteUser(): Promise<void> {
    this.confirmationService.confirm({
      header: this.translations.user_confirmDelete_header(),
      message: this.translations.user_confirmDelete_message(),
      icon: 'i-[mdi--alert-circle]',
      acceptButtonStyleClass: 'p-button-danger p-button',
      rejectButtonStyleClass: 'p-button',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.deleteUser();
      },
      reject: () => {},
    });
  }

  private async deleteUser(): Promise<void> {
    const userId = this.existingUser?.id;
    if (!userId) {
      this.messageService.add({
        severity: 'error',
        summary: this.translations.error(),
        detail: this.translations.user_error_determine(),
      });
      return;
    }
    const deleted = await this.userStore.deleteUser(userId);
    if (deleted) {
      this.dialogVisible.set(false);
    }
  }

  private resetDialog(): void {
    this.name = undefined;

    this.isEdit = false;
    this.existingUser = undefined;
  }

  private async addUser(): Promise<void> {
    const successfulAdded = await this.userStore.addUser({
      name: this.name ?? '',
    });
    if (successfulAdded) {
      this.dialogVisible.set(false);
    }
  }

  private async editUser(): Promise<void> {
    const user = this.existingUser;
    if (!user) {
      this.messageService.add({
        severity: 'error',
        summary: this.translations.error(),
        detail: this.translations.user_error_determine(),
      });
      return;
    }

    const successfulUpdated = await this.userStore.updateUser({
      id: user.id ?? -1,
      name: user.name ?? '',
    });
    if (successfulUpdated) {
      this.dialogVisible.set(false);
    }
  }
}
