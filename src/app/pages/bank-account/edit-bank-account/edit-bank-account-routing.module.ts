import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBankAccountComponent } from './edit-bank-account.component';

const routes: Routes = [{ path: '', component: EditBankAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBankAccountRoutingModule { }
