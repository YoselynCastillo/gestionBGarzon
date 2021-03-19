import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BankAccountFormComponent } from './bank-account-form.component';



@NgModule({
  declarations: [BankAccountFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [BankAccountFormComponent]
})
export class BankAccountFormModule { }
