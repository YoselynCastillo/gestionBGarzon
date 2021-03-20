import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBankRoutingModule } from './edit-bank-routing.module';
import { EditBankComponent } from './edit-bank.component';
import { BankFormModule } from 'src/app/shared/components/bank-form/bank-form.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditBankComponent],
  imports: [
    CommonModule,
    EditBankRoutingModule,
    ReactiveFormsModule,
    BankFormModule
  ]
})
export class EditBankModule { }
