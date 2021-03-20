import { Injectable } from '@angular/core';
import { AccountType } from '../shared/models/account-type.interface';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { Audit } from '../shared/models/audit.interface';
import { AuditService } from './audit.service';

@Injectable({
  providedIn: 'root'
})

export class AccountTypeService {

  accountstype: Observable<AccountType[]>;

  private accountsTypeCollection: AngularFirestoreCollection<AccountType>;

  constructor(private readonly afs: AngularFirestore, private auditService: AuditService) {
    this.accountsTypeCollection = afs.collection<AccountType>('banco_tipo_cuenta');// antes era accountsstype
    this.getAccountsType();
  }


  onDeleteAccountType(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => { 
      try {
        this.onSaveAudit(empId, true);//----------------------------- Auditoria
        const result = await this.accountsTypeCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveAccountType(accounttype: AccountType, accounttypeId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = accounttypeId || this.afs.createId();
        let auditoria  = await this.onSaveAudit(accounttypeId);//---- Auditoria
        accounttype.Co_Auditoria = auditoria;//----------------------   ^
        accounttype.Co_Banco_Tipo_Cuenta = id;

        console.log(accounttype);
        const result = await this.accountsTypeCollection.doc(accounttype.Co_Banco_Tipo_Cuenta).set(accounttype);
        resolve(result);
        
      } catch (err) {
        reject(err.message);
      }
    });
  }


  private getAccountsType(): void {
    this.accountstype = this.accountsTypeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as AccountType))
    );
  }

  //-----------------------------------------------------------------------
  
  async onSaveAudit( empId: string, deleteBank?: boolean) {
    let audit: Audit = {
      Nb_Tabla: 'Banco_Tipo_Cuenta',
      Co_Tipo_Operacion: deleteBank ? 'Eliminar Tipo de Cuenta' :  empId ? 'Editar Tipo de Cuenta' : 'Añadir Tipo de Cuenta',
      Tx_Sentencia: 'Tx_Sentencia',
      Tx_Error: 'Tx_Error',
    };
    let Co_Auditoria = this.auditService.onSaveAudits(audit);
    console.log(Co_Auditoria);
    return Co_Auditoria;
  }

}
