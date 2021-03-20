import { Injectable } from '@angular/core';
import { Audit } from '../shared/models/audit.interface';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuditService {
  audits: Observable<Audit[]>;

  private auditsCollection: AngularFirestoreCollection<Audit>;
  audit: Observable<Audit[]>;

  constructor(private readonly afs: AngularFirestore, private auth: AngularFireAuth) {
    this.auditsCollection = afs.collection<Audit>('Auditoria');
    this.getAudits();
  }

  // onDeleteAudits(empId: string): Promise<void> {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const result = await this.auditsCollection.doc(empId).delete();
  //       resolve(result);
  //     } catch (err) {
  //       reject(err.message);
  //     }
  //   });
  // }

  onSaveAudits122(audit: Audit): string {
    const id = this.afs.createId();
    audit.Co_Auditoria = id;
    audit.Co_MAC = 'Co_MAC';
    audit.Co_IP = 'Co_IP';
    audit.Co_Usuario = 'Co_Usuario';
    audit.Fe_ins = new Date();
    audit.St_Error = false;

    let promesa = new Promise(async (resolve, reject) => {
      try {
        const result = await this.auditsCollection.doc(id).set(audit);
        console.log('Auditoria Hecha');
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
    promesa.then(resp=>{ console.log('Auditoria Realizada con exito'); });
    return audit.Co_Auditoria;
  }

  //auth.onAuthStateChanged(user => console.log(user.uid));
  onSaveAudits(audit: Audit) {
    const id = this.afs.createId();
    audit.Co_Auditoria = id;
    audit.Co_MAC = 'Co_MAC';
    audit.Co_IP = 'Co_IP';
    //audit.Co_Usuario = 'Co_Usuario';
    audit.Fe_ins = new Date();
    audit.St_Error = false;

    let promesa = new Promise(async (resolve, reject) => {
      try {
        this.auth.onAuthStateChanged((user) => {
          if(user){
            audit.Co_Usuario = user.uid;
            const result = this.auditsCollection.doc(id).set(audit);// const result = await this.auditsCollection.doc(id).set(audit);
            resolve(result);
          }
        });

      } catch (err) {
        reject(err.message);
      }
    });
    promesa.then(resp=>{ console.log('Auditoria Realizada con exito'); });
    return audit.Co_Auditoria;
  }

  private getAudits(): void {
    this.audits = this.auditsCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Audit))
      );
  }
  private async getAudit(Co_Auditoria) {
      return await this.afs.collection('Auditoria', ref => ref.where('Co_Auditoria','==', Co_Auditoria).limit(1)).valueChanges();
  }
}
