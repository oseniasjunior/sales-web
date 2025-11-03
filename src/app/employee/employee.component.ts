import {Component, output, signal} from '@angular/core';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {FormsModule} from '@angular/forms';
import {Subject} from 'rxjs';

export interface Employee {
  name: string;
  document: string;
  gender: string;
}

@Component({
  selector: 'app-employee',
  imports: [
    EmployeeListComponent,
    FormsModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  totalFemale = signal(0);
  totalMale = signal(0);

  employee = signal({
    name: '',
    document: '',
    gender: '',
  });

  addedEmployee = new Subject<Employee>();


  add(){
    this.addedEmployee.next(this.employee());
    this.employee.set({
      name: '',
      document: '',
      gender: '',
    });
  }

}
