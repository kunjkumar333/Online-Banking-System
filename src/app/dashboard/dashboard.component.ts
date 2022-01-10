import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  customers: Observable<Customer[]> | any;
  uniqueID: any;
  user: any;
  name: any;

  constructor(private route: Router, private cService: CustomerService) {}

  ngOnInit(): void {
    this.user = sessionStorage.getItem('email');
    this.getName();
    this.getUserId();
  }

  passbook() {
    this.route.navigate(['/passbook']);
  }

  sendmoney() {
    this.route.navigate(['/sendmoney']);
  }
  receivemoney() {
    this.route.navigate(['/sendmoney']);
  }

  createaccount() {
    this.route.navigate(['/createaccount']);
  }

  getUserId() {
    this.cService.getUid(this.user).subscribe(
      (data) => {
        this.uniqueID = data;
        sessionStorage.setItem('uid', this.uniqueID);
        console.log(this.uniqueID);
      },
      (error) => console.log(error)
    );
  }
  getName() {
    const byEmail = sessionStorage.getItem('email');
    this.cService.getDetails(byEmail).subscribe(
      (data) => {
        this.name = data;
        console.log(this.name);
      },
      (error) => console.log(error)
    );
  }
}
