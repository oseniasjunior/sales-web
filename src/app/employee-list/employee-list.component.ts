import {Component, effect, input, OnInit, output, signal} from '@angular/core';
import {Employee} from '../employee/employee.component';
import {Subject} from 'rxjs';



@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit {
  addedEmployee = input<Subject<Employee>>();
  employees = signal<Employee[]>([]);

  ngOnInit() {
    this.listenAddedEmployee();
  }

  listenAddedEmployee(){
    this.addedEmployee()?.subscribe(employee => {
      this.employees.update(employees => [...employees, employee]);
    });
  }

}
