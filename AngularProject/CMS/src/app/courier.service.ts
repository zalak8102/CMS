import { HttpClient,HttpHeaders,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { ICourier } from './courier';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  private _url: string = "http://localhost:4000/courier";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getCouriers():Observable<ICourier[]>{
    return this.http.get<ICourier[]>(this._url);
  }

  public create(data): Observable<ICourier> {
    return this.http.post<ICourier>(this._url+"/create", data);
  }

  public update(data): Observable<ICourier> {
    return this.http.put<ICourier>(this._url+"/update/" + data._id, data);
  }

  public get(data): Observable<ICourier> {
    return this.http.get<ICourier>(this._url+"/read/"+ data._id);
  }


}
