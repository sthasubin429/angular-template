import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { DetailShellComponent } from './components/detail-shell/detail-shell.component';


@NgModule({
  declarations: [
    DetailsComponent,
    DetailShellComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
