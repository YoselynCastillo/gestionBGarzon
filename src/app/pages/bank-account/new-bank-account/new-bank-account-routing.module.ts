import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBankAccountComponent } from './new-bank-account.component';

const routes: Routes = [{ path: '', component: NewBankAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBankAccountRoutingModule { }
