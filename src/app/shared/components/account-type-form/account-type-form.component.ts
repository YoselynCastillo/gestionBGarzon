import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountTypeService } from 'src/app/services/account-type.service';
import { AccountType } from '../../models/account-type.interface';
// import { Bitacora } from '../../models/bitacora.interface';

@Component({
  selector: 'app-account-type-form',
  templateUrl: './account-type-form.component.html',
  styleUrls: ['./account-type-form.component.scss']
})
export class AccountTypeFormComponent implements OnInit {

	accountType: AccountType;
	accountTypeForm: FormGroup;

  	constructor( 
  		private router: Router,
    	private fb: FormBuilder,
    	private accountstypeService: AccountTypeService
    ) { 
  		const navigation = this.router.getCurrentNavigation();
    	this.accountType = navigation?.extras?.state?.value;
    	this.initForm();

    }

   ngOnInit(): void {
    if (typeof this.accountType === 'undefined') {
      this.router.navigate(['new-type']);
    } else {
      this.accountTypeForm.patchValue(this.accountType);
    }
  }

  onSave(): void {
    console.log('Saved account type', this.accountTypeForm.value);

    if (this.accountTypeForm.valid) {
      const accounttype   = this.accountTypeForm.value;
      const accountTypeId = this.accountType?.Co_Banco_Tipo_Cuenta || null;

      this.accountstypeService.onSaveAccountType(accounttype, accountTypeId );
      this.accountTypeForm.reset();
    } else {
      console.log ("fallo");
    }
  }

  onGoBackToList(){

  }

  

  private initForm(): void {
    this.accountTypeForm = this.fb.group({
      Nb_Banco_Tipo_Cuenta: ['', [Validators.required]],
      St_Activo: ['', [Validators.required]],
    });
  }

    isValidField(field: string): string {
    const validatedField = this.accountTypeForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invalid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }

}
