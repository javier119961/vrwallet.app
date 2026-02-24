import {Component, inject} from '@angular/core';
import {AccountListComponent} from "../../components/account-list/account-list.component";
import { rxResource } from '@angular/core/rxjs-interop';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-account-shell',
  imports: [
    AccountListComponent
  ],
  templateUrl: './account-shell.component.html',
  styles: ``,
})
export default class AccountShellComponent {
  private accountService = inject(AccountService);
    
  accountRx = rxResource({
    stream: ()=> this.accountService.getAccounts(),
    defaultValue: []
  });
  
}
