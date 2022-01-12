import { Component, OnInit } from '@angular/core';
import { AfterloginService } from '../afterlogin.service';

import { Router } from '@angular/router';
import { Transaction } from '../trasaction';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-admin-txn',
  templateUrl: './admin-txn.component.html',
  styleUrls: ['./admin-txn.component.css'],
  providers: [DatePipe]
})
export class AdminTxnComponent implements OnInit {
  
  sent: number = 0;
  balance: number = 0;
  received: number = 0;
  receiverid: string="";
  uid:string="";
  currentDate = new Date();

  transaction:Transaction=new Transaction; 
  //  In this transaction all the values of front end are stored
  submitted=false;
  constructor(private tService:AfterloginService,private router:Router,private datePipe: DatePipe) { 
  }

  ngOnInit(): void {
    
  }

  newTransaction():void{
   
    console.log("button");
    this.sent=0; //here we can initialize all the values
    this.received=this.transaction.balance; //we want to store the transaction values from front end
    this.receiverid="ADMIN"; //we have intialize the values as per need
    

    const cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  
    
   // this.transaction=new Transaction();
      this.transaction.sent=this.sent;
      this.transaction.receiverid=this.receiverid;
      this.transaction.date=cValue;
     // this.transaction.uid=this.uid;
      this.transaction.received=this.received;
     // this.transaction.balance=this.balance;
    
      this.tService.addTransaction(this.transaction)
    .subscribe(data => console.log(data), error => console.log(error));
  
  this.gotoList();
  }

  // save(){
  //   this.tService.addTransaction(this.transaction)
  //   .subscribe(data => console.log(data), error => console.log(error));
  // this.transaction= new Transaction();
  // this.gotoList();

  // }

  onSubmit() {
    this.submitted = true;
    this.newTransaction();    
  }

gotoList() {
    this.router.navigate(['/admin-dashboard']).then(() => {
      window.location.reload();
    });
  }


}
