import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';

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
  // public goToSee(item){
  //   this.navigationExtras.state.value = item;
  //   this.router.navigate(['details'], this.navigationExtras);
  // }
  async goToDelete(item: Account): Promise<void> {
    try {
      await this.banksService.onDeleteBanks(item.id);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }
}
