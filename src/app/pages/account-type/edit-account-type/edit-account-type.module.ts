import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccountTypeRoutingModule } from './edit-account-type-routing.module';
import { EditAccountTypeComponent } from './edit-account-type.component';


@NgModule({
  declarations: [EditAccountTypeComponent],
  imports: [
    CommonModule,
    EditAccountTypeRoutingModule
  ]
})
export class EditAccountTypeModule { }
