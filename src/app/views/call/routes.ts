import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // data: {
    //   title: 'call'
    // },
    children: [
      {
        path: '',
        redirectTo: 'call',
        pathMatch: 'full'
      },
      {
        path: 'call',
        loadComponent: () => import('./call/call.component').then(m => m.CallComponent),
        data: {
          title: 'Call'
        }
      }

    ]
  }
];
