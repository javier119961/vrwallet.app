import {Routes} from "@angular/router";

export default [
  {
    path: '',
    title: 'accounts | vrwallet',
    loadComponent: ()=> import('./pages/account-shell/account-shell.component')
  }
] as Routes