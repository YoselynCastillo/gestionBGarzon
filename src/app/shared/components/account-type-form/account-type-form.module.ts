import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountTypeFormComponent } from './account-type-form.component';



@NgModule({
  declarations: [AccountTypeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports: [AccountTypeFormComponent]
})

export class AccountTypeFormModule { }
