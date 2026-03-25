import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProgressSpinner } from 'primeng/progressspinner';
import { AccountService } from '../../services/account.service';
import { CardComponent } from '@shared/components/card/card.component';
import { AccountTransactionItemComponent } from '../../components/account-transaction-item/account-transaction-item.component';
import { AccountSummaryCardComponent } from '../../components/account-summary-card/account-summary-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AccountSummaryChartComponent } from '../../components/account-summary-chart/account-summary-chart.component';
import { format } from 'date-fns';

@Component({
  selector: 'vrw-account-detail',
  standalone: true,
  imports: [
    CardComponent,
    CurrencyPipe,
    RouterLink,
    ProgressSpinner,
    AccountTransactionItemComponent,
    AccountSummaryCardComponent,
    NgApexchartsModule,
    AccountSummaryChartComponent,
  ],
  templateUrl: './account-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccountDetailComponent {
  public id = input.required<string>();

  private accountService = inject(AccountService);

  accountResource = rxResource({
    params: () => ({ id: this.id() }),
    stream: ({ params }) => this.accountService.getById(params.id),
  });

  transactionsResource = rxResource({
    params: () => ({ id: this.id() }),
    stream: ({ params }) => this.accountService.getTransactions(params.id),
  });

  account = computed(() => this.accountResource.value());
  balanceTodayChart = computed(() => {
    const date = format(new Date(), 'yyyy-MM-dd');
    const balance = this.account()?.balance || 0;
    return {
      date,
      balance,
    };
  });
  isInitialLoading = computed(() => this.accountResource.isLoading());
  accountStyle = computed(() => {
    const color = this.account()?.color || '#009688';
    return {
      primary: color,
      light: `${color}1A`,
    };
  });
}
