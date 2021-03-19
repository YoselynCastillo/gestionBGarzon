import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { BankAccount } from '../shared/models/bank-account.interface';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor() { }

  onSaveBankAccount(bankAccount: BankAccount, bankAccountId: string): Promise<void>{
    return new Promise( async (resolve, reject) =>{
        try {

            resolve();
        } catch (error) {
            reject(error.mesage);
        }
    })
  }
}
