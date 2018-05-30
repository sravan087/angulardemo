import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { TransCode } from '../models/TransCode';
import { MatStepper } from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  transDescCtrl: FormControl = new FormControl('',Validators.required);
  transTypeCtrl: FormControl = new FormControl('',Validators.required);
  lostReasonCtrl: FormControl = new FormControl('',Validators.required);
 
  lostReasonOptions:  Observable<string[]>;
  filteredOptions: Observable<TransCode[]>;
  

 

  filter(val: string, a: TransCode[]): TransCode[] {
    debugger;
    let x = a.filter(option =>
       option.transDesc.toLowerCase().includes(val.toLowerCase()));
       return x;
     }

  filterLostReason(val: string, b: string[]): string[] {
    debugger;
    let lostReasons = b.filter(optionn =>
      optionn.toLowerCase().includes(val.toLowerCase()));
      return lostReasons;
  }

  lostReason: string[] =[
    'Lost Reason 1','Lost Reason 2','Lost Reason 3','Lost Reason 4','Lost Reason 5'

  ];

 

  transCodes: TransCode[] =[
    {
      id: 1,
      transCode : "SUBSCR",
      transDesc : "Subscription"
    },
    {
      id: 2,
      transCode : "REDEMP",
      transDesc : "Redemption"
    },
    {
      id: 3,
      transCode : "TRANSF",
      transDesc : "Transfer"
    },
  ];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

 
  isOptional: boolean = false;
  isLostReason: boolean = false;

  constructor(private _formBuilder: FormBuilder) { 
    this.filteredOptions = this.transDescCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val, this.transCodes))
      );
    this.lostReasonOptions = this.lostReasonCtrl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterLostReason(val, this.lostReason))
    );
  }

 
  ngOnInit() {

    
    
     

    this.firstFormGroup = this._formBuilder.group({
    
    
    });
    this.secondFormGroup = this._formBuilder.group({
      AccountToCtrl: '',
      ClientSubAccountToCtrl: '',
      ClientNameToCtrl: '',
      DeskToCtrl: '',
      AccountFromCtrl: '',
      ClientSubAccountFromCtrl: '',
      ClientNameFromCtrl: '',
      DeskFromCtrl: '',
      
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ''
    });
  }

    createTicket()
    {
        console.log(this.firstFormGroup.value)
    }

  

  

}
