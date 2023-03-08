import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardDetailComponent } from './components/dashboard-detail/dashboard-detail.component';
import { DashboardShellComponent } from './components/dashboard-shell/dashboard-shell.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: DashboardDetailComponent
      },
      {
        path: 'details',
        loadChildren: () => import('./detail/detail.module').then(mod => mod.DetailModule),

      },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
