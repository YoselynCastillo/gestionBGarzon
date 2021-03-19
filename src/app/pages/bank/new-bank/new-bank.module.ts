import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBankRoutingModule } from './new-bank-routing.module';
import { NewBankComponent } from './new-bank.component';
import { BankFormModule } from 'src/app/shared/components/bank-form/bank-form.module';


@NgModule({
  declarations: [NewBankComponent],
  imports: [
    CommonModule,
    NewBankRoutingModule,
    BankFormModule,
  ]
})
export class NewBankModule { }
