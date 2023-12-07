import { Routes } from '@angular/router';
import { DetailShellComponent } from './components/detail-shell/detail-shell.component';
import { DetailsComponent } from './components/details/details.component';

export const dashboardDetailRoutes: Routes = [
  {
    path: '',
    component: DetailShellComponent, // component with the router outlet
    children: [
      {
        path: '',
        component: DetailsComponent,
      },
    ],
  },
];
