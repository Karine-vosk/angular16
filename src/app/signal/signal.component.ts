import {Component, computed, inject, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterService} from '../core/services/counter.service';


// //we can create a box with this initial value
const counter = signal(0);
// // //reading the counter value
 console.log(counter(), 'counter'); //get() opens a box

// // //set new value
 counter.set(1);
 console.log(counter(), 'counter set'); //exchanging the content of the box
// // //.set sends a signal of the box

// // //set new value based on the current one
 counter.update(curVal => curVal + 2);
  console.log(counter(), 'update'); // convenience function

// //creating a computed signal //follow other boxes
// //deriving signals computing
 const doubleCount = computed(() => counter() * 2);
 console.log(doubleCount(), 'doubleCount');
// // //when we update a signal, the signals depending on it are notified
// // //that they should recalculate when are called again (lazily)
 counter.update((value) => value + 2);
 console.log(counter(), 'counter');
 console.log(doubleCount(), 'doubleCount');



@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})

export default class SignalComponent {
  counterService = inject(CounterService);
  counter = this.counterService.counter;

  //creating a computed signal //follow other boxes
  isEven = computed(() => this.counter() % 2 === 0);
  color = computed(() => this.isEven() ? 'green' : 'blue');

  constructor() {
    effect(() => {
     //console.log(this.counter(), 'from effect side');
     console.log( 'from effect side');
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('aa');
      this.counter.update(cur => cur + 2);
      console.log('second');
    }, 100);
  }

  increment() {
    console.log('signal');
    this.counterService.counter.update(c => c + 1);
  }

}
