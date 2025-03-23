import { Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: '',
        component: UserComponent,
      },
      {
        path: ':id',
        loadComponent: () => import('./components/dept/dept.component').then(m => m.DeptComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'user', pathMatch: 'full' },
];
