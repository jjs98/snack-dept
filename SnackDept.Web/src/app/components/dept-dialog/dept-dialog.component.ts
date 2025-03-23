import { CommonModule, registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';

import { TranslateService } from '../../../services/translate.service';
import { UserStore } from '../../../store/user.store';
import { DeptDto } from '../../api/models';

@Component({
  selector: 'app-dept-dialog',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DatePickerModule,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    ListboxModule,
    RadioButtonModule,
    TooltipModule,
  ],
  templateUrl: './dept-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeptDialogComponent {
  protected readonly userStore = inject(UserStore);
  protected readonly translations = inject(TranslateService).translations;
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly activatedRoute = inject(ActivatedRoute);

  protected readonly currentDate = new Date();

  protected reason: string | null | undefined = undefined;
  protected description: string | null | undefined = undefined;
  protected amount: number | undefined = undefined;
  protected userId: number | undefined = undefined;
  protected deptDate = signal<Date>(this.getCurrentDate());
  protected redemptionDate: Date | null | undefined = undefined;

  protected dialogVisible = signal(false);
  protected existingDept: DeptDto | undefined = undefined;

  private isEdit = false;

  constructor() {
    registerLocaleData(de);
    effect(() => {
      if (!this.dialogVisible()) {
        this.resetDialog();
      }
    });
  }

  public showDialog(deptDto: DeptDto | undefined = undefined): void {
    if (deptDto) {
      this.isEdit = true;
      this.reason = deptDto.reason;
      this.description = deptDto.description;
      this.amount = deptDto.amount;
      this.userId = deptDto.userId;
      this.deptDate.set(deptDto.deptDate ? new Date(deptDto.deptDate) : this.getCurrentDate());
      this.redemptionDate = deptDto.redemptionDate ? new Date(deptDto.redemptionDate) : undefined;
      this.existingDept = deptDto;
    } else {
      const userId = this.activatedRoute.snapshot.url[0].path;
      this.userId = parseInt(userId, 10);
    }

    this.dialogVisible.set(true);
  }

  protected onCancel(): void {
    this.dialogVisible.set(false);
  }

  protected async onSave(): Promise<void> {
    if (!this.amount || !this.userId || !this.deptDate) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill out all fields',
      });
      return;
    }

    if (this.isEdit) {
      await this.editDept();
    } else {
      await this.addDept();
    }
  }

  protected async onKeyPress(event: KeyboardEvent): Promise<void> {
    if (
      event.key === 'Enter' &&
      this.amount !== undefined &&
      this.userId !== undefined &&
      this.deptDate !== undefined
    ) {
      await this.onSave();
    }
  }

  protected hasDeptChanged(): boolean {
    const dept = this.existingDept;
    if (!dept) {
      return true;
    }

    return (
      this.reason != dept.reason ||
      this.description != dept.description ||
      this.amount != dept.amount ||
      this.userId != dept.userId ||
      this.deptDate().toISOString() !=
        (dept.deptDate ? new Date(dept.deptDate).toISOString() : '') ||
      this.redemptionDate != dept.redemptionDate
    );
  }

  protected async confirmDeleteDept(): Promise<void> {
    this.confirmationService.confirm({
      header: this.translations.dept_confirmDelete_header(),
      message: this.translations.dept_confirmDelete_message(),
      icon: 'i-[mdi--alert-circle]',
      acceptButtonStyleClass: 'p-button-danger p-button',
      rejectButtonStyleClass: 'p-button',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.deleteDept();
      },
      reject: () => {},
    });
  }

  private async deleteDept(): Promise<void> {
    const deptId = this.existingDept?.id;
    if (!deptId) {
      this.messageService.add({
        severity: 'error',
        summary: this.translations.error(),
        detail: this.translations.dept_error_determine(),
      });
      return;
    }
    const deleted = await this.userStore.deleteDept({ id: deptId });
    if (deleted) {
      this.dialogVisible.set(false);
    }
  }

  private resetDialog(): void {
    this.reason = undefined;
    this.description = undefined;
    this.amount = undefined;
    this.userId = undefined;
    this.deptDate.set(this.getCurrentDate());
    this.redemptionDate = undefined;

    this.isEdit = false;
    this.existingDept = undefined;
  }

  private async addDept(): Promise<void> {
    const successfulAdded = await this.userStore.addDept({
      reason: this.reason ?? '',
      description: this.description ?? '',
      amount: this.amount ?? 0,
      userId: this.userId ?? 0,
      deptDate: this.deptDate().toISOString(),
      redemptionDate: this.redemptionDate?.toISOString() ?? null,
    });
    if (successfulAdded) {
      this.dialogVisible.set(false);
    }
  }

  private async editDept(): Promise<void> {
    const dept = this.existingDept;
    if (!dept) {
      this.messageService.add({
        severity: 'error',
        summary: this.translations.error(),
        detail: this.translations.dept_error_determine(),
      });
      return;
    }

    const successfulUpdated = await this.userStore.updateDept({
      id: dept.id ?? -1,
      reason: this.reason ?? '',
      description: this.description ?? '',
      amount: this.amount ?? 0,
      userId: this.userId ?? 0,
      deptDate: this.deptDate().toISOString(),
      redemptionDate: this.redemptionDate?.toISOString() ?? null,
    });
    if (successfulUpdated) {
      this.dialogVisible.set(false);
    }
  }

  private getCurrentDate(): Date {
    const currentDate = new Date();
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes()
    );
  }
}
