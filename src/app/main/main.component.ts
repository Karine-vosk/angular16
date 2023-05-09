import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  nav = [
    {
      path: '/main',
      name: 'First tab',
      enabled: true
    },
    {
      path: '/main/second-tab',
      name: 'Second tab',
      enabled: true
    }
  ];
  activeLink: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeLink = this.router.url;
  }

}


