import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAccountTypeComponent } from './edit-account-type.component';

const routes: Routes = [{ path: '', component: EditAccountTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAccountTypeRoutingModule { }
