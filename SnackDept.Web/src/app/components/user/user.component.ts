import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule, TableRowSelectEvent } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { TranslateService } from '../../../services/translate.service';
import { UserStore } from '../../../store/user.store';
import { UserDto } from '../../api/models';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    RadioButtonModule,
    TableModule,
    TooltipModule,
    UserDialogComponent,
  ],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class UserComponent implements OnInit {
  protected readonly userStore = inject(UserStore);
  protected readonly translations = inject(TranslateService).translations;

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly userDialog = viewChild.required(UserDialogComponent);

  public async ngOnInit(): Promise<void> {
    await this.userStore.loadUser();
  }

  protected getTotalDept(user: UserDto): number {
    return user.depts?.reduce((acc, dept) => acc + ((dept?.redemptionDate || dept?.redemptionDate != null) ? 0: dept?.amount || 0), 0) || 0;
  }

  protected onEditUser(user: UserDto): void {
    this.userDialog().showDialog(user);
  }

  protected onAddUser(): void {
    this.userDialog().showDialog();
  }

  protected onRowSelect($event: TableRowSelectEvent): void {
    const user = $event.data as UserDto;
    if (!user.id) {
      return;
    }

    this.router.navigate([`${user.id}`], {
      relativeTo: this.activatedRoute,
    });
  }
}
