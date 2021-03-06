import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private router: Router) {}

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.router.navigate(['/bank-list']);
        // this.checkUserIsVerified(user);
      } else{
        this.router.navigate(['/register']);
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