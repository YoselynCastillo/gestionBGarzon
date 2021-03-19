import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AccountTypeService } from 'src/app/services/account-type.service';
import { AccountType } from '../../../shared/models/account-type.interface';


@Component({
selector: 'app-account-type-list',
templateUrl: './account-type-list.component.html',
styleUrls: ['./account-type-list.component.scss']
})

export class AccountTypeListComponent implements OnInit {

	accountstype$ = this.accounttypeService.accountstype;
	navigationExtras: NavigationExtras = {
		state: {   value: null }
	};

	constructor(private router: Router, private accounttypeService: AccountTypeService) { }

	ngOnInit(): void {
	}


	public goToEdit(accounttype)  {
    this.navigationExtras.state.value = accounttype;
    this.router.navigate(['edit-type'], this.navigationExtras);
	}

	async goToDelete(accounttype: AccountType): Promise<void> {
    try {
      await this.accounttypeService.onDeleteAccountType(accounttype.Co_Banco_Tipo_Cuenta);
    } catch (err) {
      console.log(err);
    }
}
}
