import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'call',
        loadChildren: () => import('./views/call/routes').then((m) => m.routes)
      },
      {
        path: 'analytics',
        loadChildren: () => import('./views/analytics/routes').then((m) => m.routes)
      },
      {
        path: 'setting',
        loadChildren: () => import('./views/setting/routes').then((m) => m.routes)
      },
      {
        path: 'analytics',
        loadChildren: () => import('./views/analytics/routes').then((m) => m.routes)
      },
      {
        path: 'support',
        loadChildren: () => import('./views/support/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
