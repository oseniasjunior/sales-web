import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Employee} from '../models/employee';
import {catchError, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  http = inject(HttpClient);
  urlBase: string = 'http://localhost:8001/api/core/employee/';
  params : HttpParams;

  constructor() {
    this.params = new HttpParams();
  }

  public save(employee: Employee){
    return this.http.post(this.urlBase, employee).pipe(
      catchError(_ => {
        return of([]);
      })
    );
  }

  clearParams(){
    this.params = new HttpParams();
  }

  addParam(key: string, value: string){
    this.params = this.params.append(key, value);
  }


  public getAll(){
    return this.http.get<Employee[]>(this.urlBase, {params: this.params}).pipe(
      catchError(_ => {
        return of([]);
      })
    );
  }


}
