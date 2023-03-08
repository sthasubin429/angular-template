import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { TestShellComponent } from './components/test-shell/test-shell.component';

const routes: Routes = [
  {
    path: '',
    component: TestShellComponent,
    children: [
      {
        path: '',
        component: TestComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
