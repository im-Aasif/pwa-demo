import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //     ];
  //   })
  // );

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    lineWidth: 2,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return value + ' kWH';
          }
        },
        gridLines: {
          display: false
        }
      }],
      xAxes:[{
        gridLines: {
          display: false
        }
      }]
    },
    barThickness: 1,
    barPercentage: 0.2,
    categoryPercentage: 0.2,
    maxBarThickness: 1
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public data = [159, 180, 181, 156, 155, 140, 123, 223, 156, 155, 140, 123, 223];

  public barChartData: any[] = [];

  public colors: any[] = []
  public lineData = [160, 190, 195, 165, 170, 160, 130, 230, 140, 165, 170, 110, 240];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  constructor(private breakpointObserver: BreakpointObserver) {
    this.data.forEach((d, i) => {
      this.barChartLabels.push(String(2006 + i))
      this.colors.push('cyan')
    })
    this.barChartData.push({
      data: this.data,
      label: 'Series A',
      backgroundColor: 'cyan',
      borderColor: 'red',
      borderWidth: 2
    })
    this.barChartData.push({
      type: 'line',
      data: this.lineData,
      label: 'Series B',
      fill: false,
      backgroundColor: 'green',
      borderColor: 'black',
      pointRadius: 4,
      showLine: true
    })
  }
}
