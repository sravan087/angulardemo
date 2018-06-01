import { CashticketService } from './../../Services/CashTicket/cashticket.service';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TransCode } from '../../models/TransCode';
import { MatStepper } from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;


  isOptional = false;
  isLostReason = false;
  transDescCtrl: FormControl = new FormControl('', Validators.required);
  transTypeCtrl: FormControl = new FormControl('', Validators.required);
  lostReasonCtrl: FormControl = new FormControl('', Validators.required);
  lostReasonOptions:  Observable<string[]>;
  filteredOptions: Observable<TransCode[]>;

  filter(val: string, a: TransCode[]): TransCode[] {
    const x = a.filter(option =>
       option.transCode.toLowerCase().includes(val.toLowerCase()));
       return x;
     }

  filterLostReason(val: string, b: string[]): string[] {

    const lostReasons = b.filter(optionn =>
      optionn.toLowerCase().includes(val.toLowerCase()));
      return lostReasons;
  }

  constructor(private _cashTicketService: CashticketService, private _formBuilder: FormBuilder) {
    this.filteredOptions = this.transDescCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val, this._cashTicketService.getTranCodes()))
      );
    this.lostReasonOptions = this.lostReasonCtrl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterLostReason(val, this._cashTicketService.getLostReasons()))
    );
  }


  ngOnInit() {
   this.firstFormGroup = this._formBuilder.group({});
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

    createTicket() {
        console.log(this.firstFormGroup.get('genealInfo.transDescCtrl'));
    }

    IfRedemption() {
      console.log(this.firstFormGroup.get('genealInfo.transDescCtrl'));
      return true;
    }



}
