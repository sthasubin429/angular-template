import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardDetailComponent } from './components/dashboard-detail/dashboard-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
