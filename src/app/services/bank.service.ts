import { Injectable } from '@angular/core';
import { Bank } from '../shared/models/bank.interface';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { BitacorasService } from 'src/app/services/bitacoras.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  banks: Observable<Bank[]>;

  private banksCollection: AngularFirestoreCollection<Bank>;

  constructor(private readonly afs: AngularFirestore,  private bitacoraService: BitacorasService) {
    this.banksCollection = afs.collection<Bank>('banco');
    this.getBanks();
  }

  onDeleteBanks(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => { 
      try {
        const result = await this.banksCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveBanks(bank: Bank, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        bank.Co_Banco = id;
        bank.Co_Auditoria='CodigoAuditoria';
        bank.St_Activo = true;
        // const cadena = { 'id': '', 'co_bitacora_previa': 'xxxxxxxx' , 'co_Account': id, 'fe_Ins':'01/01/01'};
        // console.log(this.bitacoraService.onSaveBitacoras(cadena));
        const result = await this.banksCollection.doc(id).set(bank);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }


  private getBanks(): void {
    this.banks = this.banksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Bank))
    );
  }
  

}
