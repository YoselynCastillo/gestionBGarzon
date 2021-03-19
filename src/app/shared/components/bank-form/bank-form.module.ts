import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BankFormComponent } from './bank-form.component';



@NgModule({
  declarations: [BankFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [BankFormComponent]
})
export class BankFormModule { }
