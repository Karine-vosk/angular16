import {Route} from "@angular/router";
import {PaymentFeesComponent} from "./payment-fees/payment-fees.component";
import {PaymentTransactionsComponent} from './payment-transactions/payment-transactions.component';
import {PaymentsComponent} from "./payments.component";

// In payments/routes.ts:
export const PAYMENT_ROUTES: Route[] = [
  {path: '', redirectTo: 'payments', pathMatch: 'full'},
  {
    path: 'payments', component: PaymentsComponent, title: 'payments',
    children: [
      {path: '', component: PaymentFeesComponent, pathMatch: 'full', title: 'payments'},
      {path: 'payment-transactions', component: PaymentTransactionsComponent, title: 'payment-transactions'},
    ]
  },
];

// export default [
//   {path: '', redirectTo: 'payments', pathMatch: 'full'},
//   {
//     path: 'payments', component: PaymentsComponent,
//     children: [
//       {path: '', component: PaymentFeesComponent, pathMatch: 'full'},
//       {path: 'payment-transactions', component: PaymentTransactionsComponent},
//     ]
//   },
// ]as Route[];
