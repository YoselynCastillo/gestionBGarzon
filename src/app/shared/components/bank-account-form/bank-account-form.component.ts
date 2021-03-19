import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankAccountService } from 'src/app/services/bank-account.service';
import { BankAccount } from '../../models/bank-account.interface';

@Component({
  selector: 'app-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.scss']
})
export class BankAccountFormComponent implements OnInit {
/*    Co_Banco_Cuenta (Genera solo)
      Co_Banco (DROPDOWN)--
      Nu_Banco_Cuenta (INPUT)--
      Co_Banco_Tipo_Cuenta (DROPDOWN)--
      Co_Empresa (INPUT)--
      St_Activo (SE GENERA)-- se genera true
      Co_Auditoria (LUEGO)
       */

  bankAccount: BankAccount;
  bankAccountForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private bankAccountSvc: BankAccountService) {
    const navitation = this.router.getCurrentNavigation();
    this.bankAccount = navitation?.extras?.state?.value;
    this.initForm();
   }

  ngOnInit(): void {
    if(typeof this.bankAccount === 'undefined'){
      this.router.navigate(['']);
    }else{
      this.bankAccountForm.patchValue(this.bankAccount);
    }
  }

  onSave(): void{
    if(this.bankAccountForm.valid){
      const bankAccount = this.bankAccountForm.value;
      const bankAccountId = this.bankAccount?.Co_Banco_Cuenta || null;
      this.bankAccountSvc.onSaveBankAccount(bankAccount, bankAccountId);
      this.bankAccountForm.reset();
    }
  }

  private initForm(): void{
    this.bankAccountForm = this.fb.group({
      Co_Banco_Cuenta: ['', [Validators.required]],
      Co_Banco: ['', [Validators.required]],
      Nu_Banco_Cuenta: ['', [Validators.required]],
      Co_Banco_Tipo_Cuenta: ['', [Validators.required]],
      Co_Empresa: ['', [Validators.required]],
      St_Activo: [true, [Validators.required]],
      Co_Auditoria: ['', [Validators.required]],
    });
  }

}
