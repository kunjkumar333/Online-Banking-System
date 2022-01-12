import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CustomerService } from '../customer.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private cService:CustomerService, private route:Router){

  }
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     if(this.cService.isUserLoggedIn()){
      const status = this.cService.isUserLoggedIn();
      return status;
     }
  
    else{
      this.route.navigate(['/login']);
     return false
    }
}

  
}
