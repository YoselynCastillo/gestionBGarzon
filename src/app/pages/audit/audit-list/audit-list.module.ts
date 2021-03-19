import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditListRoutingModule } from './audit-list-routing.module';
import { AuditListComponent } from './audit-list.component';


@NgModule({
  declarations: [AuditListComponent],
  imports: [
    CommonModule,
    AuditListRoutingModule
  ]
})
export class AuditListModule { }
