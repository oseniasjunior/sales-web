import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Employee} from '../models/employee';
import {catchError, of} from 'rxjs';
import {MaritalStatus} from '../models/marital_status';
import {Department} from '../models/department';

@Injectable({providedIn: 'root'})
export class DepartmentService {

  http = inject(HttpClient);
  urlBase: string = 'http://localhost:8001/api/cruds/department/';
  params : HttpParams;

  constructor() {
    this.params = new HttpParams();
  }

  public save(department: Department){
    return this.http.post(this.urlBase, department);
  }

  clearParams(){
    this.params = new HttpParams();
  }

  addParam(key: string, value: string){
    this.params = this.params.append(key, value);
  }

  public getAll(){
    return this.http.get<Department[]>(this.urlBase, {params: this.params}).pipe(
      catchError(_ => {
        return of([]);
      })
    );
  }


}
