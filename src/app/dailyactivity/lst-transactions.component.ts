import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/Transaction';

@Component({
  selector: 'app-lst-transaction',
  templateUrl: './lst-transactions.component.html',
  styleUrls: ['./lst-transactions.component.css']
})
export class LstTransactionsComponent implements OnInit {

  transactions: Transaction[] = [
     {
       id: 1,
       tradeDate: new Date("2017/10/15"),
        settleDate: new Date("2017/10/15"),
        amount : 10000000.98,
        tranCode : "SUBSCR",
        bloombergToAccount : "CDHTY",
        bloombergFromAccount:""
        

     },
     {
      id: 2,
      tradeDate: new Date("2017/10/15"),
       settleDate: new Date("2017/10/15"),
       amount : 10000000.98,
       tranCode : "SUBSCR",
       bloombergToAccount : "CDHTY",
       bloombergFromAccount:"GDFDG"
       

    },{
      id: 3,
      tradeDate: new Date("2017/10/15"),
       settleDate: new Date("2017/10/15"),
       amount : 10000000.98,
       tranCode : "SUBSCR",
       bloombergToAccount : "CDHTY",
       bloombergFromAccount:""
       

    },{
      id: 4,
      tradeDate: new Date("2017/10/15"),
       settleDate: new Date("2017/10/15"),
       amount : 10000000.98,
       tranCode : "SUBSCR",
       bloombergToAccount : "CDHTY",
       bloombergFromAccount:"RRSRH"
       

    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
