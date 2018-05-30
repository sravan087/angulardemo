import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatInputModule,
MatStepperModule, MatRadioModule, MatAutocompleteModule
} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router' 


import { AppComponent } from './app.component';
import { LstTransactionsComponent } from './dailyactivity/lst-transactions.component';
import { CreateTicketComponent } from './manualentry/create-ticket.component';

const appRoutes: Routes = [{ path:'transactions', component:LstTransactionsComponent },
{ path:'createticket', component:CreateTicketComponent },
{ path:'', redirectTo:'/createticket', pathMatch:'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    LstTransactionsComponent,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatAutocompleteModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
