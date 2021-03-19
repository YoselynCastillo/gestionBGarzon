import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccountTypeRoutingModule } from './edit-account-type-routing.module';
import { EditAccountTypeComponent } from './edit-account-type.component';
import { AccountTypeFormModule } from 'src/app/shared/components/account-type-form/account-type-form.module';


@NgModule({
  declarations: [EditAccountTypeComponent],
  imports: [
    CommonModule,
    EditAccountTypeRoutingModule,
    AccountTypeFormModule,
  ]
})


export class EditAccountTypeModule { }
