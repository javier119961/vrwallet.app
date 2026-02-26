import {Component, input} from '@angular/core';
import {Account} from "../../interfaces/account.interface";
import {AccountItemComponent} from "../account-item/account-item.component";

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    AccountItemComponent
  ],
  templateUrl: './account-list.component.html',
  styles: ``,
})
export class AccountListComponent {
  accounts = input.required<Account[]>();
}
