import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/accounts/accounts-list/accounts-list.module').then(
        (m) => m.AccountsListModule
      ),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./pages/accounts/new-account/new-account.module').then(
        (m) => m.NewAccountModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/accounts/account-details/account-details.module').then(
        (m) => m.AccountDetailsModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./pages/accounts/edit-account/edit-account.module').then(
        (m) => m.EditAccountModule
      ),
  },
  {
    path: 'bitacora',
    loadChildren: () =>
      import('./pages/bitacoras/bitacoras-list/bitacora-list.module').then(
        (m) => m.BitacoraListModule
      ),
  },
  // { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'consultas', loadChildren: () => import('./pages/consultas/consultas-list/consultas.module').then(m => m.ConsultasModule) },
  { path: 'bank-list', loadChildren: () => import('./pages/bank/bank-list/bank-list.module').then(m => m.BankListModule) },
  { path: 'new-bank', loadChildren: () => import('./pages/bank/new-bank/new-bank.module').then(m => m.NewBankModule) },
  { path: 'edit-bank', loadChildren: () => import('./pages/bank/edit-bank/edit-bank.module').then(m => m.EditBankModule) },
  { path: 'edit-type', loadChildren: () => import('./pages/account-type/edit-account-type/edit-account-type.module').then(m => m.EditAccountTypeModule) },
  { path: 'new-type', loadChildren: () => import('./pages/account-type/new-account-type/new-account-type.module').then(m => m.NewAccountTypeModule) },
  { path: 'type-list', loadChildren: () => import('./pages/account-type/account-type-list/account-type-list.module').then(m => m.AccountTypeListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
