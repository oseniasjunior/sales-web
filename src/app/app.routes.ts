import { Routes } from '@angular/router';
import {FruitsComponent} from './fruits/fruits.component';
import {ParentComponent} from './parent/parent.component';
import {EmployeeComponent} from './employee/employee.component';

export const routes: Routes = [
  { path: 'fruits', component: FruitsComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'employee', component: EmployeeComponent },
];
