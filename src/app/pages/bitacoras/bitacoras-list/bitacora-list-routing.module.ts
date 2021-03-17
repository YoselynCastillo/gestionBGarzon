import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitacoraListComponent } from './bitacora-list.component';
import { EditBitacoraComponent } from '../edit-bitacora/edit-bitacora.component';

const routes: Routes = [
  { path: '', component: BitacoraListComponent },
  { path: '/edit', component: EditBitacoraComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BitacoraListRoutingModule { }
