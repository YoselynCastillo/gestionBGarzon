import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAccountTypeRoutingModule } from './new-account-type-routing.module';
import { NewAccountTypeComponent } from './new-account-type.component';
import { AccountTypeFormModule } from 'src/app/shared/components/account-type-form/account-type-form.module';


@NgModule({
  declarations: [NewAccountTypeComponent],
  imports: [
    CommonModule,
    NewAccountTypeRoutingModule,
    AccountTypeFormModule,
  ]
})

export class NewAccountTypeModule { }
