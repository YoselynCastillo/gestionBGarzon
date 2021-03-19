import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditDetailsComponent } from './audit-details.component';

const routes: Routes = [{ path: '', component: AuditDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditDetailsRoutingModule { }
