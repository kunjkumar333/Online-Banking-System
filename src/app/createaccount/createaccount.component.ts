import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import * as bootstrap from "bootstrap";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  RegisterForm: FormGroup | any;

  customer: Customer = new Customer();
  submitted = false;


  constructor(private formBuilder:FormBuilder,private cService:CustomerService, private route:Router,/*private formBuilder: FormBuilder*/) {
   }

  ngOnInit(): void {

     this.RegisterForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
       lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
       fathername: ['', [Validators.required]],
       dob: ['', [Validators.required]],
       aadharnumber:['',[Validators.required,Validators.pattern('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$')]],
       pannumber:['',[Validators.required,Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$')]],
       password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
       mobilenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
       country: ['', [Validators.required]],
       state: ['', [Validators.required]],
       city: ['', [Validators.required]],
       street: ['', [Validators.required]],
       pincode: ['', [Validators.required]],      
     });

  }
  registerForm(){
    $(document).ready(function() {             
      $('#registerModal').modal('show');
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
      });
     
  }

  get f() { return this.RegisterForm.controls; }
  
  save() {

    this.cService.createaccount(this.customer).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.customer);
    this.customer = new Customer();
   // this.gotoList();
   
 }

 onSubmit(){
   this.submitted = true;
   this.save();
   this.route.navigate(['/login']);
 } 
}
