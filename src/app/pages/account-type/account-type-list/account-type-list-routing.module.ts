import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTypeListComponent } from './account-type-list.component';

const routes: Routes = [{ path: '', component: AccountTypeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTypeListRoutingModule { }
