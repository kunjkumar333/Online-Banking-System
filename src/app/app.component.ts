import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banking-Project';

  constructor(public lService:CustomerService){}
 
}
