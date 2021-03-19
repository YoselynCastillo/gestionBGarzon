import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountListRoutingModule } from './bank-account-list-routing.module';
import { BankAccountListComponent } from './bank-account-list.component';


@NgModule({
  declarations: [BankAccountListComponent],
  imports: [
    CommonModule,
    BankAccountListRoutingModule
  ]
})
export class BankAccountListModule { }
