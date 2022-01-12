import { Component, OnInit } from '@angular/core';
import { Transaction } from '../trasaction';
import { AfterloginService } from '../afterlogin.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.css'],
  providers: [DatePipe],
})
export class SendmoneyComponent implements OnInit {
  user1: any;
  amount: number = 0;
  receiverid: any;
  transaction1: Transaction | any;
  transaction2: Transaction | any;
  lastbalance: number = 0;
  submitted = false;
  currentDate = new Date();
  lastbalance2: number = 0;
  notavailable= false;
  alert=false;

  constructor(
    private aService: AfterloginService,
    private route: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.user1 = sessionStorage.getItem('uid');
    this.transaction1 = new Transaction();
    this.aService.lastTransaction(this.user1).subscribe(
      (data) => {
        console.log(data);
        this.transaction1 = data;
      },
      (error) => console.log(error)
    );
  }

  send() {
    console.log('button');

    this.aService.checkuser(this.receiverid).subscribe((response) => {
      console.log(response);
      if (response) {
        this.transaction2 = new Transaction();
        this.aService.lastTransaction(this.receiverid).subscribe(
          (data) => {
            console.log(data);
            this.transaction2 = data;
            console.log(this.transaction2, '54');

            this.lastbalance = this.transaction1.balance - this.amount;
            if (this.lastbalance > 0) {
              console.log(this.lastbalance);

              this.lastbalance2 = this.transaction2.balance + this.amount;
              console.log(this.transaction2, '67');

              const cValue = formatDate(
                this.currentDate,
                'yyyy-MM-dd',
                'en-US'
              );
              this.transaction1.balance = this.lastbalance;
              this.transaction1.receiverid = this.receiverid;
              this.transaction1.sent = this.amount;
              this.transaction1.date = cValue;
              this.transaction1.received = 0;

              this.transaction2.balance = this.lastbalance2;
              this.transaction2.uid = this.receiverid;
              this.transaction2.receiverid = this.user1;
              this.transaction2.sent = 0;
              this.transaction2.date = cValue;
              this.transaction2.received = this.amount;

              this.aService
                .addTransaction(this.transaction1)
                .subscribe((error) => console.log(error));

              this.aService
                .addTransaction(this.transaction2)
                .subscribe((error) => console.log(error));

              this.route.navigate(['/dashboard']);
            } else {
              this.alert=true;
            }
          },
          (error) => console.log(error)
        );
      }
      else{
             
        this.notavailable = true
      }
    });
  }
}
