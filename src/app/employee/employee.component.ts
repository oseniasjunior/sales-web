import {Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmployeeService} from '../services/employee.service';
import {DistrictService} from '../services/district.service';
import {MaritalStatusService} from '../services/marital-status.service';
import {Department} from '../models/department';
import {District} from '../models/district';
import {MaritalStatus} from '../models/marital_status';
import {DepartmentService} from '../services/department.service';
import {Employee} from '../models/employee';
import {NgStyle} from '@angular/common';


export interface Totals {
  female: number;
  male: number;
}

@Component({
  selector: 'app-employee',
  imports: [
    EmployeeListComponent,
    FormsModule,
    ReactiveFormsModule,
    NgStyle,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  totalFemale = signal(0);
  totalMale = signal(0);

  formGroup: FormGroup;
  formBuilder = inject(FormBuilder);
  employeeService = inject(EmployeeService);

  districtService = inject(DistrictService);
  departmentService = inject(DepartmentService);
  maritalStatusService = inject(MaritalStatusService);

  districtList = signal<District[]>([]);
  departmentList = signal<Department[]>([]);
  maritalStatusList = signal<MaritalStatus[]>([]);

  employeeListComponent = viewChild(EmployeeListComponent);

  constructor() {
    this.formGroup = this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      salary: [null, Validators.required],
      admission_date: [null, Validators.required],
      birth_date: [null, Validators.required],
      gender: ['M', Validators.required],
      department: [null, Validators.required],
      district: [null, Validators.required],
      marital_status: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.getDepartments();
    this.getDistricts();
    this.getMaritalStatus();
  }

  getDepartments(){
    this.departmentService.getAll().subscribe({
      next: (response) => this.departmentList.set(response)
    })
  }

  getDistricts(){
    this.districtService.getAll().subscribe({
      next: (response) => this.districtList.set(response)
    })
  }

  getMaritalStatus(){
    this.maritalStatusService.getAll().subscribe({
      next: (response) => this.maritalStatusList.set(response)
    })
  }


  add() {
    let employee = this.formGroup.getRawValue() as Employee;
    this.employeeService.save(employee).subscribe({
      next: (response) => {
        this.formGroup.reset();
        this.formGroup.controls['gender'].setValue('M');
        this.employeeListComponent()?.getEmployees();
      }
    })
  }

  subscribeTotals(totals: Totals) {
    this.totalFemale.set(totals.female);
    this.totalMale.set(totals.male);
  }

}
