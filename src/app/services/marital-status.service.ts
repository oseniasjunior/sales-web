import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Employee} from '../models/employee';
import {catchError, of} from 'rxjs';
import {MaritalStatus} from '../models/marital_status';

@Injectable({providedIn: 'root'})
export class MaritalStatusService {

  http = inject(HttpClient);
  urlBase: string = 'http://localhost:8001/api/cruds/marital_status/';
  params : HttpParams;

  constructor() {
    this.params = new HttpParams();
  }

  public save(marital_status: MaritalStatus){
    return this.http.post(this.urlBase, marital_status);
  }

  clearParams(){
    this.params = new HttpParams();
  }

  addParam(key: string, value: string){
    this.params = this.params.append(key, value);
  }


  public getAll(){
    return this.http.get<MaritalStatus[]>(this.urlBase, {params: this.params}).pipe(
      catchError(_ => {
        return of([]);
      })
    );
  }


}
