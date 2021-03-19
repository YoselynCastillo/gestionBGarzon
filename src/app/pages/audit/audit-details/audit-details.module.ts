import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditDetailsRoutingModule } from './audit-details-routing.module';
import { AuditDetailsComponent } from './audit-details.component';


@NgModule({
  declarations: [AuditDetailsComponent],
  imports: [
    CommonModule,
    AuditDetailsRoutingModule
  ]
})
export class AuditDetailsModule { }
