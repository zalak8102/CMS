import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import {ICourier} from "./courier";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "http://localhost:4000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  public create(data): Observable<IEmployee> {
    return this.http.post<IEmployee>(this._url+"/create", data);
  }

  public update(data): Observable<IEmployee> {
    return this.http.put<IEmployee>(this._url+"/update/" + data._id, data);
  }


}
