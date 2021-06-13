import { Injectable } from '@angular/core';
import {ILogin} from './login';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITransport} from "./transport";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public ip = 'http://localhost:4000/';
  public urls = {
    login: this.ip + 'api/login',
    create: this.ip + 'api/create',
    delete: this.ip + 'api/delete/',
    get: this.ip + 'api/read/'
  };
  public users: object;

  constructor(private httpClient: HttpClient) {
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('admin', 'false');
    localStorage.setItem('client', 'false');
    localStorage.setItem('transport', 'false');
    localStorage.setItem('mainadmin', 'false');
    console.log("loggegout..");
    localStorage.setItem('id', '-1');
  }

  public login(data): Observable<ILogin> {
    return this.httpClient.post<ILogin>(this.urls.login, data);
  }

  public create(data): Observable<ILogin> {
    return this.httpClient.post<ILogin>(this.urls.create, data);
  }

  public delete(id): Observable<ILogin> {
    return this.httpClient.delete<ILogin>(this.urls.delete + id);
  }

  public getUser(id):Observable<ITransport[]>{
    return this.httpClient.get<ITransport[]>(this.urls.get+ id);
  }
  gettoken(){
    return localStorage.getItem("admin");
  }


}

