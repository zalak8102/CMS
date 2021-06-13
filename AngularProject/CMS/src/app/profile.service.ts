import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _url: string = "http://localhost:4000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getprofile():Observable<IProfile[]>{
    return this.http.get<IProfile[]>(this._url);
  }
}
