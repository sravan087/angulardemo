import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { TransCode } from '../models/TransCode';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }

    createTicket()
    {
        console.log(this.firstFormGroup.value)
    }

  

  

}
