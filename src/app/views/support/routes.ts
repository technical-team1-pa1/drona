import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
  
    children: [
      {
        path: '',
        redirectTo: 'support',
        pathMatch: 'full'
      },
      {
        path: 'support',
        loadComponent: () => import('./support/support.component').then(m => m.SupportComponent),
        data: {
          title: 'Support'
        }
      }

    ]
  }
];
