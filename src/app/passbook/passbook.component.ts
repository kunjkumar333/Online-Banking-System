import { Component, OnInit } from '@angular/core';
import { AfterloginService } from '../afterlogin.service';
import { Observable } from 'rxjs';
import { Transaction } from '../trasaction';
import { data } from 'jquery';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {

  transactions:Observable<Transaction[]>| any;
  lastTxn:Observable<Transaction[]>| any;
  
  constructor(private aService:AfterloginService) { }

  toggleOn:boolean=false;
  toggleOn1:boolean=false;
  txns:any;
 
  ngOnInit(): void {
    
    this.getAllTxn();
   this.getLastTxn();
  }
  getAllTxn(){
    const uid1=sessionStorage.getItem('uid');
    this.transactions=this.aService.getPassbook(uid1);
  }
  getLastTxn(){
    const uid1=sessionStorage.getItem('uid');
    this.aService.lastTransaction(uid1).
    subscribe((data)=>{
      this.txns=data;
      console.log(this.txns);
    })
  }
  showAll(){
    this.getAllTxn();
    this.toggleOn=!this.toggleOn;
  }
  showLast(){
    this.getLastTxn();
    this.toggleOn1=!this.toggleOn1;
  }
  

}
