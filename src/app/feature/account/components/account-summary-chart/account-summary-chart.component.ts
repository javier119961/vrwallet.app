import { Component, computed, input } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { AccountBalance } from '../../interfaces/account-balance.interface';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'vrw-account-summary-chart',
  imports: [CardComponent, ChartComponent],
  templateUrl: './account-summary-chart.component.html',
})
export class AccountSummaryChartComponent {
  color = input.required<string>();
  balances = input<AccountBalance[]>([]);

  chartOpts = computed<Partial<ChartOptions>>(() => {
    const data = this.balances() || [];
    const seriesData = data.map((b) => b.balance);
    const categories = data.map((b) => b.date);

    return {
      series: [
        {
          color: this.color(),
          name: 'Balance',
          data: seriesData,
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      title: {
        text: 'Account Balance (Last 7 Days)',
      },
      xaxis: {
        categories: categories,
      },
    };
  });
}
