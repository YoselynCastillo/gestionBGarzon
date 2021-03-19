import { Injectable } from '@angular/core';
import { Bank } from '../shared/models/bank.interface';
import { Audit } from '../shared/models/audit.interface';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { BitacorasService } from 'src/app/services/bitacoras.service';
import { AuditService } from 'src/app/services/audit.service';
import { User } from '../shared/models/user.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  public user$: Observable<User> = this.authSvc.afAuth.user;
  banks: Observable<Bank[]>;

  private banksCollection: AngularFirestoreCollection<Bank>;

  constructor(
    public authSvc: AuthService,
    private readonly afs: AngularFirestore,
    private bitacoraService: BitacorasService,
    private auditService: AuditService
  ) {
    this.banksCollection = afs.collection<Bank>('banco');
    this.getBanks();
  }

  onDeleteBanks(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        this.onSaveAudit(empId, true);
        const result = await this.banksCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }
  async onSaveAudit( empId: string, deleteBank?: boolean) {
    
    let audit: Audit = {
      Nb_Tabla: 'banco',
      Co_Tipo_Operacion: deleteBank ? 'Eliminar Banco' :  empId ? 'Editar Banco' : 'Añadir Banco',
      Tx_Sentencia: 'Tx_Sentencia',
      Tx_Error: 'Tx_Error',
    };
    let Co_Auditoria = this.auditService.onSaveAudits(audit);
    console.log(Co_Auditoria);
    return Co_Auditoria;
  }

  onSaveBanks(bank: Bank, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        let result;
        const id = empId || this.afs.createId();
        bank.Co_Banco = id;
        bank.Co_Auditoria = 'CodigoAuditoria';
        bank.St_Activo = true;
        let auditoria  = await this.onSaveAudit(empId);
        bank.Co_Auditoria = auditoria;
        result = await this.banksCollection.doc(id).set(bank);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  private getBanks(): void {
    this.banks = this.banksCollection
      .snapshotChanges()
      .pipe(map((actions) => actions.map((a) => a.payload.doc.data() as Bank)));
  }
}
