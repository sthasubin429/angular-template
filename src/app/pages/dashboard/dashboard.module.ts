import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardDetailComponent } from './components/dashboard-detail/dashboard-detail.component';
import { DashboardShellComponent } from './components/dashboard-shell/dashboard-shell.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailComponent,
    DashboardShellComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
