import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransport } from './transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  private _url: string = "http://localhost:4000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getTransports():Observable<ITransport[]>{
    return this.http.get<ITransport[]>(this._url);
  }
}
