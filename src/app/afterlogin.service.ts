import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './trasaction';

@Injectable({
  providedIn: 'root'
})
export class AfterloginService {


  
  baseUrl='http://localhost:9876/obs/txn/get';
  baseUrl1='http://localhost:9876/obs/txn/all';
  baseUrl2='http://localhost:9876/obs/txn/add';
  baseUrl3='http://localhost:9876/obs/data/checkAccount';
  constructor(private http:HttpClient) { }

  getPassbook(uid:any):Observable<any>{
    return this.http.get(`${this.baseUrl1}/${uid}`);
  }

  lastTransaction(uid1:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${uid1}`)
  
  }

  addTransaction(transact:Object):Observable<Object> {
    return this.http.post(`${this.baseUrl2}`,transact);
  }

  checkuser(userid: String): Observable<any> {
    return this.http.get(`${this.baseUrl3}/${userid}`);
  }
  
}
