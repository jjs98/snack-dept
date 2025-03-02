import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadComponent: () => import('./components/user/user.component').then(m => m.UserComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
