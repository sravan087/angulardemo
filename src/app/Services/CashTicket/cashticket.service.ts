import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashticketService {

  constructor() { }

  getTranCodes() {
    return [
      {
        id: 1,
        transCode : 'SUBSCR',
        transDesc : 'Subscription'
      },
      {
        id: 2,
        transCode : 'REDEMP',
        transDesc : 'Redemption'
      },
      {
        id: 3,
        transCode : 'TRANSF',
        transDesc : 'Transfer'
      },
    ];
}

getLostReasons() {
 return [ 'Lost Reason 1', 'Lost Reason 2', 'Lost Reason 3', 'Lost Reason 4', 'Lost Reason 5'];
}
}
