import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';
import { Bank } from '../../models/bank.interface';
import { Bitacora } from '../../models/bitacora.interface';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.scss']
})
export class BankFormComponent implements OnInit {

  bank: Bank;
  bitacora: Bitacora;
  bankForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private banksService: BankService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.bank = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.bank === 'undefined') {
      this.router.navigate(['new-bank']);
    } else {
      this.bankForm.patchValue(this.bank);
    }
  }

  onSave(): void {
    console.log('Saved', this.bankForm.value);
    if (this.bankForm.valid) {
      const bank = this.bankForm.value;
      const bankId = this.bank?.Co_Banco || null;
      this.banksService.onSaveBanks(bank, bankId);
      this.bankForm.reset();
      this.router.navigate(['bank-list']);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['bank-list']);
  }

  isValidField(field: string): string {
    const validatedField = this.bankForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invalid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.bankForm = this.fb.group({
      Nb_Banco: ['', [Validators.required]],
    });
  }
}
