import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { NavigationService } from '../../../services/navigation.service';
import { TranslateService } from '../../../services/translate.service';
import { UserStore } from '../../../store/user.store';
import { DeptDto, UserDto } from '../../api/models';
import { DeptDialogComponent } from '../dept-dialog/dept-dialog.component';

@Component({
  selector: 'app-dept',
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    DeptDialogComponent,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    RadioButtonModule,
    TableModule,
    TooltipModule,
  ],
  templateUrl: './dept.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DeptComponent {
  protected readonly userStore = inject(UserStore);
  protected readonly translations = inject(TranslateService).translations;
  private readonly navigationService = inject(NavigationService);

  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly deptDialog = viewChild.required(DeptDialogComponent);

  protected user = signal<UserDto | undefined>(undefined);
  protected depts = computed(() => this.user()?.depts ?? []);

  constructor() {
    const userId = this.activatedRoute.snapshot.url[0].path;

    effect(() => {
      const user = this.userStore.user().find(user => user.id?.toString() === userId);
      this.user.set(user);
    });
  }

  protected navigateBack(): void {
    this.navigationService.navigateBack();
  }

  protected getTotalDept(): number {
    return this.user()?.depts?.reduce((acc, dept) => acc + (dept?.amount || 0), 0) || 0;
  }

  protected onEditDept(dept: DeptDto): void {
    this.deptDialog().showDialog(dept);
  }

  protected onAddDept(): void {
    this.deptDialog().showDialog();
  }
}
