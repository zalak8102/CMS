import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private _url: string = "http://localhost:4000/offer";
  constructor(private http: HttpClient) { }

  getoffers():Observable<IOffer[]>{
    return this.http.get<IOffer[]>(this._url);
  }
}
