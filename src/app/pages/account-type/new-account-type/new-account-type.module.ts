import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAccountTypeRoutingModule } from './new-account-type-routing.module';
import { NewAccountTypeComponent } from './new-account-type.component';


@NgModule({
  declarations: [NewAccountTypeComponent],
  imports: [
    CommonModule,
    NewAccountTypeRoutingModule
  ]
})
export class NewAccountTypeModule { }
