import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  nav = [
    {
      path: '/payments',
      name: 'PAYMENTS_FEES',
      enabled: true
    },
    {
      path: '/payments/payment-transactions',
      name: 'PAYMENT_TRANSACTIONS',
      enabled: true
    }
  ];
  activeLink: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeLink = this.router.url;
  }

}


