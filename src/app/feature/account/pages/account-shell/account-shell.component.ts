import {ChangeDetectionStrategy, Component} from '@angular/core';
import { AccountListComponent } from '../../components/account-list/account-list.component';
import {AccountBalanceCardComponent} from "../../components/account-balance-card/account-balance-card.component";
import {AccountQuickActionsComponent} from "../../components/account-quick-actions/account-quick-actions.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'vrw-account-shell',
  imports: [AccountListComponent, AccountBalanceCardComponent, AccountQuickActionsComponent, FormsModule],
  providers: [],
  templateUrl: './account-shell.component.html',
  styles: ``,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class AccountShellComponent {
}
