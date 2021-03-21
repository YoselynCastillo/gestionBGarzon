import { User } from '../shared/models/user.interface';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  auth  from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { RoleValidator } from '../pages/auth/helpers/roleValidator';
import { BitacorasService } from './bitacoras.service';
import { Bitacora } from '../shared/models/bitacora.interface';
import {formatDate} from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService extends RoleValidator {
  public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private bitacoraService: BitacorasService, private afs: AngularFirestore) {
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }


  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      
      let bitacora  = await this.onSaveBitacora(user.uid);
      // this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string,  Nb_Usuario: string, Nu_Movil: string ): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.addDataUser(user , password, Nb_Usuario, Nu_Movil);
      // await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'ADMIN',
    };

    return userRef.set(data, { merge: true });
  }

  private addDataUser(user ,  password: string, Nb_Usuario: string, Nu_Movil: string ) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    let Fe_Recuperacion= new Date();


    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: true,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'ADMIN',
      Nb_Usuario: Nb_Usuario,
      Nu_Movil: Nu_Movil,
      Tx_Clave: password,
      Nu_Intentos: 3,
      St_Bloqueo: false,
      St_Activo: true,
      Fe_Recuperacion: Fe_Recuperacion,
    };

    return userRef.set(data, { merge: true });
  }

    async onSaveBitacora(usuarioID: string) {

    let bitacora: Bitacora = {
      fe_Ins: formatDate(new Date,'yyyy/MM/dd', 'en'),
      co_usuario: usuarioID,
    };

    let id = this.bitacoraService.onSaveBitacoras(bitacora);
    return id;
  }


}