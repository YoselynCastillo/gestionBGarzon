import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBankAccountRoutingModule } from './new-bank-account-routing.module';
import { NewBankAccountComponent } from './new-bank-account.component';


@NgModule({
  declarations: [NewBankAccountComponent],
  imports: [
    CommonModule,
    NewBankAccountRoutingModule
  ]
})
export class NewBankAccountModule { }
