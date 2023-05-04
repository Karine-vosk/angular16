import { Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

let userId = 0;
const uuid = () => ++userId;

export interface User {
  id: number;
  name: string;
}
@Component({
  selector: 'app-payment-fees',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-fees.component.html',
  styleUrls: ['./payment-fees.component.css'],
  template: '{{ title }}',
  //changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PaymentFeesComponent {
  users: any = signal<User[]>([]);

  addUser(name: string) {
    this.users.update((users: any) => {
      const user: User = {id: uuid(), name};
      // mutable update also works!
      users.push(user);
      console.log(users);

      return users;
     // return [...users, user];
    });
    console.log(this.users());

  }

  removeUser(id: number) {
    this.users.update((users: any) => users.filter((u: any) => u.id !== id));
  }

  removeAll() {
    this.users.set([]);
  }
}
