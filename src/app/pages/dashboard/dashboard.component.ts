import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  pieChartOptions: any;
  pieChartDataSet: any;



  // Table data
  sales = [
    {
      productName: "Abstract 3D",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      productStock: 32,
      productPrice: 45.99,
      productTotalSales: 20,
    },
    {
      productName: "Abstract 3D",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      productStock: 32,
      productPrice: 45.99,
      productTotalSales: 20,
    },
    {
      productName: "Abstract 3D",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      productStock: 32,
      productPrice: 45.99,
      productTotalSales: 20,
    },
    {
      productName: "Abstract 3D",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      productStock: 32,
      productPrice: 45.99,
      productTotalSales: 20,
    }
  ]

  // Bar chart data
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



  ngOnInit(): void {
    // Pie chart data
    this.pieChartDataSet = {
      labels: ["New Customers", "OverAll"],
      datasets: [{
        data: [30, 20],
        backgroundImage: ["linear-gradient(#FF007A,#CDF4FF)", "linear-gradient(#EAABF0, #4623E9)"],
        scale: [1, 3],
        // backgroundColor: ["#F1419D", "red"]
      }]
    }
    this.pieChartOptions = {
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false
        },
      }
    }
  }
}
