import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './components/test/test.component';
import { TestShellComponent } from './components/test-shell/test-shell.component';


@NgModule({
  declarations: [
    TestComponent,
    TestShellComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
