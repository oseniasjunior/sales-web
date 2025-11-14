import {Component, effect, inject, input, OnInit, output, signal} from '@angular/core';
import { Totals} from '../employee/employee.component';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../models/employee';

export interface ApiEmployee {
  id: number;
  name: string;
  gender: string;
}

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit {
  employees = signal<Employee[]>([]);

  totals = output<Totals>();

  employeesList = signal<ApiEmployee[]>([]);
  employeeService = inject(EmployeeService);


  ngOnInit() {
    this.getEmployees();
  }

  private emitTotals() {
    let female = this.employees().filter(employee => employee.gender === 'F').length;
    let male = this.employees().filter(employee => employee.gender === 'M').length;

    this.totals.emit({female: female, male: male});
  }

  getEmployees(){
    this.employeeService.clearParams();
    this.employeeService.addParam('expand', 'department');
    this.employeeService.getAll().subscribe({
      next: (response) => this.employeesList.set(response)
    })
  }



}
