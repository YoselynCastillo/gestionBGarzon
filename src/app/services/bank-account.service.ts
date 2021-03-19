import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { BankAccount } from '../shared/models/bank-account.interface';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  bankAccount: Observable<any[]>;

  private bankAccountColection: AngularFirestoreCollection<BankAccount>;

  constructor(private readonly afs: AngularFirestore) { 
    this.bankAccountColection = afs.collection<BankAccount>('banco_cuenta');
    this.getBankAccount();
  }

  onSaveBankAccount(bankAccount: BankAccount, bankAccountId: string): Promise<void>{
    return new Promise( async (resolve, reject) =>{
        try {
            const id = bankAccountId || this.afs.createId();
            bankAccount.Co_Banco_Cuenta = id;
            const data = bankAccount;
            const result = this.bankAccountColection.doc(id).set(data);
            resolve();
        } catch (error) {
            reject(error.mesage);
        }
    })
  }

  private getBankAccount(): void{
    this.bankAccount = this.bankAccountColection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as BankAccount))
    );
  }

}
