import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.routes').then((route) => route.publicRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then((route) => route.dashboardRoutes),
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.routes').then((route) => route.testRoutes),
  },
];
