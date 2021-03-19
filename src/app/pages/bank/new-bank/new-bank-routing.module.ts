import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBankComponent } from './new-bank.component';

const routes: Routes = [{ path: '', component: NewBankComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBankRoutingModule { }
