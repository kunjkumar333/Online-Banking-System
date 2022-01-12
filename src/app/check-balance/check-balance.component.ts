import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AfterloginService } from '../afterlogin.service';
import { Transaction } from '../trasaction';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {

  
  transactions:Observable<Transaction[]>| any;
  lastTxn:Observable<Transaction[]>| any;
  
  constructor(private aService:AfterloginService) { }

  toggleOn:boolean=false;
  txns:any;
 
  ngOnInit(): void {
    
   this.getLastTxn();
  }

  getLastTxn(){
    const uid1=sessionStorage.getItem('uid');
    this.aService.lastTransaction(uid1).
    subscribe((data)=>{
      this.txns=data;
      console.log(this.txns);
    })
  }
 
}
