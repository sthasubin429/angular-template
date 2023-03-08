import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailShellComponent } from './components/detail-shell/detail-shell.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailShellComponent, // component with the router outlet
    children: [
      {
        path: '',
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
