import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';

let userId = 0;
const uuid = () => ++userId;

export interface User {
  id: number;
  name: string;
}

//creating
const count = signal(0);
// //reading: get signal
// console.log(count());

// //setting signal
// count.set(1);
// console.log(count(), 'change');

// //updating signal
// count.update((value)=> value + 1);
// console.log(count(), 'upd count');

// //deriving signals computing
// const doubleCount = computed(() => count() * 2);
// console.log(doubleCount(), 'doubleCount');
// //when we update a signal, the signals depending on it are notified
// //that they should recalculate when are called again (lazily)
// count.update((value) => value + 1);
// console.log(count(), 'count');
// console.log(doubleCount(), 'doubleCount');

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


  ngOnInit(): void {

  }

  constructor() {

  }
}
