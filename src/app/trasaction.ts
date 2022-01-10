export class Transaction {
  tid:number=0;
  sent: number = 0;
  balance: number = 0;
  date:Date | any;
  received?: number = 0;
  receiverid: string="";
  uid:string="";
}
