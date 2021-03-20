import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBankAccountRoutingModule } from './edit-bank-account-routing.module';
import { EditBankAccountComponent } from './edit-bank-account.component';
import { BankAccountFormModule } from 'src/app/shared/components/bank-account-form/bank-account-form.module';


@NgModule({
  declarations: [EditBankAccountComponent],
  imports: [
    CommonModule,
    EditBankAccountRoutingModule,
    BankAccountFormModule
  ]
})
export class EditBankAccountModule { }
