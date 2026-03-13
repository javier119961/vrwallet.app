import {Component, computed, input} from '@angular/core';
import {CardComponent} from "@shared/components/card/card.component";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'vrw-account-summary-chart',
  imports: [
    CardComponent,
    ChartComponent
  ],
  templateUrl: './account-summary-chart.component.html',
})
export class AccountSummaryChartComponent {
  color =  input.required<string>();

  chartOpts = computed<Partial<ChartOptions>>(() => {
    return {
      series: [
        {
          color: this.color(),
          name: "Amount",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      title: {
        text: "Account yields"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep","Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    }
  });
  
}
