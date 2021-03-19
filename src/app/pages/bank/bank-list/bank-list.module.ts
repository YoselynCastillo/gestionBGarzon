import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankListRoutingModule } from './bank-list-routing.module';
import { BankListComponent } from './bank-list.component';


@NgModule({
  declarations: [BankListComponent],
  imports: [
    CommonModule,
    BankListRoutingModule
  ]
})
export class BankListModule { }
