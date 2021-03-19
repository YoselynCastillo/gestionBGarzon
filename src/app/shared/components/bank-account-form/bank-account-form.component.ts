import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountTypeService } from 'src/app/services/account-type.service';
import { BankAccountService } from 'src/app/services/bank-account.service';
import { BankService } from 'src/app/services/bank.service';
import { AccountType } from '../../models/account-type.interface';

import { BankAccount } from '../../models/bank-account.interface';
import { Bank } from '../../models/bank.interface';

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
  
  banks = this.banksSrv.banks;
  bank: Bank = {
    Co_Banco: '',
    Nb_Banco: '',
    // Co_Funcional: '';
    St_Activo: true,
    Co_Auditoria: '',
  };

  accountTypes = this.accountTypeSvc.accountstype;
  accountType: AccountType = {
    Co_Banco_Tipo_Cuenta: '',
    Nb_Banco_Tipo_Cuenta: '',
    St_Activo: 1,
    Co_Auditoria: '',
  }

  constructor(private router: Router, private fb: FormBuilder, private bankAccountSvc: BankAccountService, private banksSrv: BankService, private accountTypeSvc: AccountTypeService) {
    const navitation = this.router.getCurrentNavigation();
    this.bankAccount = navitation?.extras?.state?.value;
    this.initForm();
    
   }

  ngOnInit(): void {
  }

  onSave(): void{
    //if(this.bankAccountForm.valid){
      const bankAccount = this.bankAccountForm.value;
      const bankAccountId = this.bankAccount?.Co_Banco_Cuenta || null;
      this.bankAccountSvc.onSaveBankAccount(bankAccount, bankAccountId);
      console.log(bankAccount);
      this.bankAccountForm.reset();
    //}
  }

  onSelectBank(id: any): void{
    this.bank.Co_Banco = id;
  }

  onSelectBankType(id: any): void{
    this.accountType.Co_Banco_Tipo_Cuenta = id;
  }

  private initForm(): void{
    this.bankAccountForm = this.fb.group({
      Co_Banco_Cuenta: ['', [Validators.required]],// generado, listo
      Co_Banco: [this.bank.Co_Banco, [Validators.required]],// viene de la tabla banco, listo
      Nu_Banco_Cuenta: ['', [Validators.required]],// listo
      Co_Banco_Tipo_Cuenta: [this.accountType.Co_Banco_Tipo_Cuenta, [Validators.required]],// viene de la labla banto_tipo_cuenta-----
      Co_Empresa: ['', [Validators.required]],// listo
      St_Activo: [true, [Validators.required]],// atomatico, listo
      Co_Auditoria: ['', [Validators.required]],// falta por hacer
    });
  }

}
