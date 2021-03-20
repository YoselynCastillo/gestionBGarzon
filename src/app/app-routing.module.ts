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
  { path: 'account-list', loadChildren: () => import('./pages/bank-account/bank-account-list/bank-account-list.module').then(m => m.BankAccountListModule) },
  { path: 'edit-account', loadChildren: () => import('./pages/bank-account/edit-bank-account/edit-bank-account.module').then(m => m.EditBankAccountModule) },
  { path: 'new-account', loadChildren: () => import('./pages/bank-account/new-bank-account/new-bank-account.module').then(m => m.NewBankAccountModule) },
  { path: 'audit-list', loadChildren: () => import('./pages/audit/audit-list/audit-list.module').then(m => m.AuditListModule) },
  { path: 'audit-details', loadChildren: () => import('./pages/audit/audit-details/audit-details.module').then(m => m.AuditDetailsModule) },
  { path: 'bitacora-list', loadChildren: () => import('./pages/bitacoras/bitacoras-list/bitacora-list.module').then(m => m.BitacoraListModule) },
  { path: 'edit-bitacora', loadChildren: () => import('./pages/bitacoras/edit-bitacora/edit-bitacora.module').then(m => m.EditBitacoraModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
