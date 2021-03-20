import { Injectable } from '@angular/core';
// import { Account } from '../shared/models/account.interface';
import { User } from '../shared/models/user.interface';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { BitacorasService } from 'src/app/services/bitacoras.service';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

//  accounts: Observable<Account[]>;
    users: Observable<User[]>;

  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private readonly afs: AngularFirestore,  private bitacoraService: BitacorasService) {
    this.usersCollection = afs.collection<User>('users');
    this.getAccounts();
  }

  onDeleteAccounts(empId: string): Promise<void> {
    console.log("el id es: " + empId);
    return new Promise(async (resolve, reject) => { 
      try {
        const result = await this.usersCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveAccounts(employee: User, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...employee };

        const result = await this.usersCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }


  private getAccounts(): void {
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as User))
    );
  }
  

}
