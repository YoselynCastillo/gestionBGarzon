import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBankAccountRoutingModule } from './new-bank-account-routing.module';
import { NewBankAccountComponent } from './new-bank-account.component';
import { BankAccountFormModule } from 'src/app/shared/components/bank-account-form/bank-account-form.module';


@NgModule({
  declarations: [NewBankAccountComponent],
  imports: [
    CommonModule,
    NewBankAccountRoutingModule,
    BankAccountFormModule,
  ]
})
export class NewBankAccountModule { }
