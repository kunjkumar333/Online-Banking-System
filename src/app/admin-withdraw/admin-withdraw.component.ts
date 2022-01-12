import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AfterloginService } from '../afterlogin.service';

import { Router } from '@angular/router';
import { Transaction } from '.././trasaction';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-admin-withdraw',
  templateUrl: './admin-withdraw.component.html',
  styleUrls: ['./admin-withdraw.component.css'],
  providers: [DatePipe]
})
export class AdminWithdrawComponent implements OnInit {
  sent: number = 0;
  amount: number = 0;
  received: number = 0;
  receiverid: any;
  uid:string="";
  transaction3: Transaction | any;
  lastbalance: number = 0;
  currentDate = new Date();


  constructor(private aService: AfterloginService, private route: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }
  withdraw(){
    this.transaction3=new Transaction();
    this.aService.lastTransaction(this.uid).subscribe((data) => { console.log(data); 
      this.transaction3 = data;
      const cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
    this.lastbalance = +(this.transaction3.balance) - +(this.amount);
    if(this.lastbalance>0){
      this.sent=this.amount;
      this.received=0;
      this.receiverid="ADMIN";
     
      this.transaction3.uid=this.uid;
      this.transaction3.sent=this.sent;
      this.transaction3.received=this.received;
      this.transaction3.receiverid=this.receiverid;
      this.transaction3.date=cValue;
      this.transaction3.balance=this.lastbalance;

      this.aService.addTransaction(this.transaction3)
      .subscribe(data => console.log(data), error => console.log(error));
    
      this.route.navigate(['/admin-dashboard']);
    }
    else{
      this.route.navigate(['/alert']);
    }

      },
      (error) => console.log(error)
    );
    
  }

}
