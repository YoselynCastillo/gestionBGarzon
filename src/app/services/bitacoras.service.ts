import { Injectable } from '@angular/core';
import { Bitacora } from '../shared/models/bitacora.interface';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})

export class BitacorasService {

  bitacoras: Observable<Bitacora[]>;

  private bitacorasCollection: AngularFirestoreCollection<Bitacora>;

  constructor(private readonly afs: AngularFirestore, private auth: AngularFireAuth) {
    this.bitacorasCollection = afs.collection<Bitacora>('bitacoras');
    this.getBitacoras();
  }

  onDeleteBitacoras(bitacora: Bitacora): Promise<void> {
    return new Promise(async (resolve, reject) => { 
      try {
        console.log("viene fe_Ins : "+ bitacora.fe_Ins);
        const result = await this.bitacorasCollection.doc(bitacora.id).delete();
        resolve(result);
        console.log("result", result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

//  onSaveBitacoras(bitacora: Bitacora): Promise<void> {
//    return new Promise(async (resolve, reject) => {
//      try {
//        const id = bitacora.id || this.afs.createId();
//        bitacora.id = id;
//        const data = { id, ...bitacora };
//      
//       const result = await this.bitacorasCollection.doc(id).set(data);
//        resolve(result);
//      } catch (err) {
//        reject(err.message);
//      }
//    });
//  }

    onSaveBitacoras(bitacora: Bitacora) {
      const id = this.afs.createId();
      bitacora.id = id;
       
      let  promesa = new Promise(async (resolve, reject) => {
        try {
          this.auth.onAuthStateChanged((user) => {
            if(user) {
              bitacora.co_usuario = user.uid;
              const result = this.bitacorasCollection.doc(id).set(bitacora); // const result = await this.auditsCollection.doc(id).set(audit);
              resolve(result);
            }
          });

        } catch (err) {
          reject(err.message);
        }

      });

      promesa.then(resp=>{ console.log('Bitacora Realizada con exito'); });
      return bitacora.id;
    }


  private getBitacoras(): void {
    this.bitacoras = this.bitacorasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Bitacora))
    );
  }


  async getPrevia(co_usuario: string) {
      const a = this.afs.collection('bitacoras', ref => ref.where('co_usuario','==', co_usuario).limit(1)).valueChanges();
  }
  
}
