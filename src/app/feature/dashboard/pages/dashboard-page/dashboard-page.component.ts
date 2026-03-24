import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  AccountBalanceCardComponent
} from "../../../account/components/account-balance-card/account-balance-card.component";

@Component({
  selector: 'vrw-dashboard-page',
  imports: [
    AccountBalanceCardComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styles: ``,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {}
