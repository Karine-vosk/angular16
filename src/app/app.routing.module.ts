import {Route} from '@angular/router';

export const routes: Route[] = [
  //both are lazy loading examples
  {
    path: '',
    redirectTo: 'payments',
    pathMatch: 'full'
  },
  {path: 'payments', loadChildren: () => import('./payments/payments.routing').then(mod => mod.PAYMENT_ROUTES)},
  {path: 'todo', loadComponent: () => import('./todo/todo.component').then(mod => mod.TodoComponent), title: 'todo'},
  {path: 'payment-fees', loadComponent: () => import('./payments/payment-fees/payment-fees.component').then(mod => mod.PaymentFeesComponent), title: 'payment-fees'},
  {path: 'signal', loadComponent: () => import('./signal/signal.component').then(mod => mod.SignalComponent), title: 'signal'},

  //without then
  // {path: '', loadChildren: () => import('./payments/payments.routing')}
  // ... rest of the routes
];


