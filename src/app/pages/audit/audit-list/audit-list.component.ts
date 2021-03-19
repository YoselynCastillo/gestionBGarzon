import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/services/audit.service';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.scss']
})
export class AuditListComponent implements OnInit {
  audits$ = this.auditServices.audits;

  constructor(private auditServices: AuditService) { }

  ngOnInit(): void {
  }
}
