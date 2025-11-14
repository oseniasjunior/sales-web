import {ModelBase} from './model-base';
import {Department} from './department';
import {District} from './district';

export class Employee extends ModelBase {
  name: string;
  salary: number;
  admission_date: Date;
  birth_date: Date;
  gender: string;
  department: number | Department;
  district: number | District;
  marital_status: number | District;

  constructor(id: number, created_at: Date, modified_at: Date, active: boolean, name: string, salary: number,
              admission_date: Date, birth_date: Date, gender: string, department: number | Department,
              district: number | District, marital_status: number | District) {
    super(id, created_at, modified_at, active);
    this.name = name;
    this.salary = salary;
    this.admission_date = admission_date;
    this.birth_date = birth_date;
    this.gender = gender;
    this.department = department;
    this.district = district;
    this.marital_status = marital_status;
  }
}
