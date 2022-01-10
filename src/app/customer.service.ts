import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = "http://localhost:9999/obs/data/users";
  baseUrl1 = "http://localhost:9999/obs/data/userlogin";
  baseUrl2='http://localhost:9999/obs/data/getId';
  baseUrl3='http://localhost:9999/obs/data/getName';
  route: any;

  constructor(private http: HttpClient) { }

  createaccount(customer: Object): Observable<any> {
    console.log(customer);
    return this.http.post(`${this.baseUrl}`, customer);
  }

  login(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl1}`, customer);
  }
  
  getUid(custEmail: String): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${custEmail}`,{responseType: 'text'});
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  getDetails(custEmail:any):Observable<any>{
    return this.http.get(`${this.baseUrl3}/${custEmail}`,{responseType:'text'});   
  }

  logOut() {
    sessionStorage.removeItem('email');
  }
}
