import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
   
    children: [
      {
        path: '',
        redirectTo: 'setting',
        pathMatch: 'full'
      },
      {
        path: 'setting',
        loadComponent: () => import('./setting/setting.component').then(m => m.SettingComponent),
        data: {
          title: 'Setting'
        }
      }

    ]
  }
];
