import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBankRoutingModule } from './edit-bank-routing.module';
import { EditBankComponent } from './edit-bank.component';
import { BankFormModule } from 'src/app/shared/components/bank-form/bank-form.module';


@NgModule({
  declarations: [EditBankComponent],
  imports: [
    CommonModule,
    EditBankRoutingModule,
    BankFormModule
  ]
})
export class EditBankModule { }
