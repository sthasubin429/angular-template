import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardDetailComponent } from './components/dashboard-detail/dashboard-detail.component';
import { DashboardShellComponent } from './components/dashboard-shell/dashboard-shell.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'detail/:id',
        component: DashboardDetailComponent,
      },
      {
        path: 'details',
        loadChildren: () => import('./detail/detail.routes').then((route) => route.dashboardDetailRoutes),
      },
    ],
  },
];
