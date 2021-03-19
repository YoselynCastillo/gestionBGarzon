import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountTypeListRoutingModule } from './account-type-list-routing.module';
import { AccountTypeListComponent } from './account-type-list.component';

@NgModule({
  declarations: [AccountTypeListComponent],
  imports: [
    CommonModule,
    AccountTypeListRoutingModule,
  ]
})

export class AccountTypeListModule { }
