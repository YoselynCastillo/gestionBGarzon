import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.interface';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    Nb_Usuario: new FormControl(''),
    Nu_Movil: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router) {}

  async onRegister() {
    const { email, password, Nb_Usuario, Nu_Movil  } = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password, Nb_Usuario, Nu_Movil );
      if (user) {
        this.router.navigate(['/list']);
        // this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // private checkUserIsVerified(user: User) {
  //   if (user && user.emailVerified) {
  //     this.router.navigate(['/home']);
  //   } else if (user) {
  //     this.router.navigate(['/verification-email']);
  //   } else {
  //     this.router.navigate(['/register']);
  //   }
  // }
}