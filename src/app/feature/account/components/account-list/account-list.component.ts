import {Component, inject, input} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {Account} from "../../interfaces/account.interface";
import {AccountItemComponent} from "../account-item/account-item.component";

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    AccountItemComponent
  ],
  templateUrl: './account-list.component.html',
  styles: ``,
})
export class AccountListComponent {
  accounts = input.required<Account[]>();
}
