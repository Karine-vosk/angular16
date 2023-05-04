import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import {TruncatePipe} from 'src/app/core/truncate.pipe';

@Component({
  selector: 'app-payment-transactions',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './payment-transactions.component.html',
  styleUrls: ['./payment-transactions.component.css'],
  template: '{{ title }}',
})
export class PaymentTransactionsComponent {

}
