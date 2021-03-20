import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';
import { User } from '../../models/user.interface';
import { Bitacora } from '../../models/bitacora.interface';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {

  user: User;
  bitacora: Bitacora;
  userForm: FormGroup;

  private isEmail = /\S+@\S+\.\S+/;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountsService: AccountsService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.user === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.userForm.patchValue(this.user);
    }
  }

  onSave(): void {
    console.log('Saved', this.userForm.value);
    if (this.userForm.valid) {
      const user = this.userForm.value;
      const accountId = this.user?.uid || null;
      this.accountsService.onSaveAccounts(user, accountId);
      this.userForm.reset();
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

  isValidField(field: string): string {
    const validatedField = this.userForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invalid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      Nb_Usuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      Nu_Movil: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }
}
