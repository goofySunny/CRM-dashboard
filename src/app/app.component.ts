import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { plugins } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { NavComponent } from "./pages/nav/nav.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRM-Dash';
}
