import {Component, input} from '@angular/core';
import {Account} from "../../interfaces/account.interface";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-account-item',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './account-item.component.html',
  styles: ``,
})
export class AccountItemComponent {
  readonly account = input.required<Account>();
}
