import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BankAccountFormComponent } from './bank-account-form.component';

import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [BankAccountFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [BankAccountFormComponent]
})
export class BankAccountFormModule { }
