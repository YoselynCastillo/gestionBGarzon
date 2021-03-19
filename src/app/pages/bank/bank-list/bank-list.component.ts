import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';
import { Bank } from 'src/app/shared/models/bank.interface';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  banks$ = this.banksService.banks;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router, private banksService: BankService) {}

  ngOnInit(): void {}

  public goToEdit(item){
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit-bank'], this.navigationExtras);
  }

  async goToDelete(item: Bank): Promise<void> {
    try {
      await this.banksService.onDeleteBanks(item.Co_Banco);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }
}
