import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        loadComponent: () => import('./analytics/analytics.component').then(m => m.AnalyticsComponent),
        data: {
          title: 'Analytics'
        }
      }

    ]
  }
];
