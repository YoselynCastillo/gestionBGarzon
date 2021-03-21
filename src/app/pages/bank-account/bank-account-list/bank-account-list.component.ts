  import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BankAccountService } from 'src/app/services/bank-account.service';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.scss']
})
export class BankAccountListComponent implements OnInit {

  bankAccounts = this.BankAccountSvc.bankAccount;

  navitationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private BankAccountSvc: BankAccountService) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    this.navitationExtras.state.value = item;
    console.log(item);
    this.router.navigate(['edit-account'], this.navitationExtras);
  }

  async onGoToDelete(Id: any): Promise<void>{
    try {
      await this.BankAccountSvc.onDeleteBankAccount(Id);
      alert('Registro Eliminado');
    } catch (error) {
      console.log(error);
    }
  }

}
