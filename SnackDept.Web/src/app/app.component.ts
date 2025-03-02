import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputIconModule } from 'primeng/inputicon';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    FormsModule,
    InputIconModule,
    MenubarModule,
    RouterModule,
    TieredMenuModule,
    ToastModule,
    TooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AppComponent implements OnInit {
  protected readonly translationService = inject(TranslateService);
  protected readonly translations = this.translationService.translations;

  protected items: MenuItem[] = [];

  public ngOnInit(): void {
    this.items = [];
  }
}
