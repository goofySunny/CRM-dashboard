import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  sideBarStatus: boolean = true;

  sideBarToggle() {
    if (this.sideBarStatus) {
      this.sideBarStatus = false
    } else {
      this.sideBarStatus = true
    }
  }
}
