import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({

  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']

})

export class LogoutComponent implements OnInit {

  constructor(private lService: CustomerService, private route: Router) { }

  ngOnInit(): void {
  

  }

  surelogout(){
    this.lService.logOut();
   
    this.route.navigate(['/home']);

  }

  back(){
    this.route.navigate(['']);
  }



}