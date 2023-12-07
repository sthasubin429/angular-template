import { Routes } from '@angular/router';
import { TestShellComponent } from './components/test-shell/test-shell.component';
import { TestComponent } from './components/test/test.component';

export const testRoutes: Routes = [
  {
    path: '',
    component: TestShellComponent,
    children: [
      {
        path: '',
        component: TestComponent,
      },
    ],
  },
];
