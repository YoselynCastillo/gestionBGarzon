import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountListComponent } from './bank-account-list.component';

const routes: Routes = [{ path: '', component: BankAccountListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountListRoutingModule { }
