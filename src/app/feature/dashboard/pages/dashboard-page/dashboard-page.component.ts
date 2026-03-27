import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BalanceTotalCardComponent} from "@shared/components/balance-total-card/balance-total-card.component";

@Component({
  selector: 'vrw-dashboard-page',
  imports: [BalanceTotalCardComponent],
  templateUrl: './dashboard-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
