import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import * as d3 from "d3";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgStyle, ChartModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'CRM-Dash';
  pieChartDataSet: any;
  pieChartOptions: any;
  sideBarStatus: boolean = true;

  statistics: { month: string, percentage: number }[] = [
    {
      month: "Jan",
      percentage: 10
    },
    {
      month: "Feb",
      percentage: 20,
    },
    {
      month: "Mar",
      percentage: 30,
    },
    {
      month: "Apr",
      percentage: 25,
    },
    {
      month: "May",
      percentage: 40,
    },
    {
      month: "Jun",
      percentage: 15,
    },
    {
      month: "Jul",
      percentage: 27,
    },
    {
      month: "Aug",
      percentage: 12,
    },
    {
      month: "Sep",
      percentage: 5,
    },
    {
      month: "Oct",
      percentage: 12,
    },
    {
      month: "Nov",
      percentage: 40,
    },
    {
      month: "Dec",
      percentage: 12,
    }
  ]

  sideBarToggle() {
    if (this.sideBarStatus) {
      this.sideBarStatus = false
    } else {
      this.sideBarStatus = true
    }
  }

  ngOnInit(): void {
    this.sideBarStatus = true;
    this.pieChartDataSet = {
      labels: ["New Customers", "OverAll"],
      datasets: [{
        label: "",
        data: [30, 20, 50],
        backgroundImage: ["linear-gradient(#FF007A,#CDF4FF)", "linear-gradient(#EAABF0, #4623E9)"],
        scale: [1, 3],
        // backgroundColor: ["#F1419D", "red"]
    }]
  }
  this.pieChartOptions = {
    plugins: {
      customCanvasBackgroundColor: {
        color: "#ffffff"
      },
      title: {
      },
      legend: {
        display: false
      }
    }
  }
}
}
