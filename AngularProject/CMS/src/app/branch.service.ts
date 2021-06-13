import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBranch } from './branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private _url: string = "http://localhost:4000/branch";
  constructor(private http: HttpClient) { }

  getBranchs():Observable<IBranch[]>{
    return this.http.get<IBranch[]>(this._url);
  }

}
