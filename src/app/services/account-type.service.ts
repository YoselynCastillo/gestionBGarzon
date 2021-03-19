import { Injectable } from '@angular/core';
import { AccountType } from '../shared/models/account-type.interface';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class AccountTypeService {

  accountstype: Observable<AccountType[]>;

  private accountsTypeCollection: AngularFirestoreCollection<AccountType>;

  constructor(private readonly afs: AngularFirestore) {
    this.accountsTypeCollection = afs.collection<AccountType>('banco_tipo_cuenta');// antes era accountsstype
    this.getAccountsType();
  }


  onDeleteAccountType(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => { 
      try {
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

        accounttype.Co_Banco_Tipo_Cuenta = id;
        accounttype.Co_Auditoria = "xxxxx-xxxx"


        console.log(accounttype);
        const result = await this.accountsTypeCollection.doc(accounttype.Co_Banco_Tipo_Cuenta).set(accounttype);
        resolve(result);
        console.log(result);
        
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
  

}
