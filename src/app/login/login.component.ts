import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import * as bootstrap from "bootstrap";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email = '';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;
 

  constructor( private route:Router, private cService:CustomerService ) { }

  ngOnInit(): void {
   
  }

  loginForm(){
    
    $("#show").click(function(){
      $('#loginModal').modal('show');
     });
    $("#hide").click(function(){
      $('#loginModal').modal('hide');
    });
    
  }
  checkLogin() {
    
    if(this.email==="admin@falcon" && this.password==="admin@falcon"){
      this.loginSuccess=true;
      this.route.navigate(['/admin-dashboard']);
    }
    else{


    let customer = { "email": this.email, "password": this.password};
    console.log(customer);

    this.cService.login(customer).subscribe((response) => {
      console.log(response);
    
     
      if (response) {
        this.route.navigate(['']);

        sessionStorage.setItem('email', this.email);
    
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      } else {
        this.invalidLogin = true;
      }
    });

    this.loginSuccess = false;

  }
}
}