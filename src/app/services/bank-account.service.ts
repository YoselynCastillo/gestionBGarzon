import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { BankAccount } from '../shared/models/bank-account.interface';
import { Audit } from '../shared/models/audit.interface';
import { AuditService } from './audit.service';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  bankAccount: Observable<any[]>;
  bankName: Observable<any[]>;

  private bankAccountColection: AngularFirestoreCollection<BankAccount>;

  constructor(private readonly afs: AngularFirestore, private auditService: AuditService) { 
    this.bankAccountColection = afs.collection<BankAccount>('banco_cuenta');
    this.getBankAccount();
  }

  onSaveBankAccount(bankAccount: BankAccount, bankAccountId: string): Promise<void>{
    return new Promise( async (resolve, reject) =>{
        try {
            const id = bankAccountId || this.afs.createId();
            let auditoria  = await this.onSaveAudit(bankAccountId);
            bankAccount.Co_Auditoria = auditoria;
            bankAccount.Co_Banco_Cuenta = id;
            const data = bankAccount;
            const result = this.bankAccountColection.doc(id).set(data);
            resolve();
        } catch (error) {
            reject(error.mesage);
        }
    })
  }

  onDeleteBankAccount(Id: string): Promise<void>{
    return new Promise( async (resolve,reject) => {
      try {
        this.onSaveAudit(Id, true);
        const result = await this.bankAccountColection.doc(Id).delete();
        resolve(result);
      } catch (error) {
        reject(error.mesage);
      }
    } )
  }

  private getBankAccount(): void{
    this.bankAccount = this.bankAccountColection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as BankAccount))
    );
  }

  async onSaveAudit( empId: string, deleteBank?: boolean) {
    let audit: Audit = {
      Nb_Tabla: 'Banco_Cuenta',
      Co_Tipo_Operacion: deleteBank ? 'Eliminar Cuenta Bancaria' :  empId ? 'Editar Cuenta Bancaria' : 'Añadir Cuenta Bancaria',
      Tx_Sentencia: 'Tx_Sentencia',
      Tx_Error: 'Tx_Error',
    };
    let Co_Auditoria = this.auditService.onSaveAudits(audit);
    console.log(Co_Auditoria);
    return Co_Auditoria;
  }

}
