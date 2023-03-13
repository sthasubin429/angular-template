import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDataPipe } from './no-data/no-data.pipe';

@NgModule({
  declarations: [
    NoDataPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoDataPipe
  ]
})
export class PipesModule { }
