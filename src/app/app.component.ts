import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as d3 from "d3";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRM-Dash';

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

  // barChart = d3.selection()
    // .data(this.statistics)
    // .enter()
    // .append("div")
    // .attr("height", 10)
}
