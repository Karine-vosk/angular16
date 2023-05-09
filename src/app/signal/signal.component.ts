import {Component, computed, inject, signal, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterService} from '../core/services/counter.service';


// //we can create a box with this initial value
 const counter = signal(0);
// //reading the counter value
console.log(counter(), 'counter'); //get() opens a box

// //set new value
// counter.set(1);
// console.log(counter(), 'counter set'); //exchanging the content of the box
// //.set sends a signal of the box

// //set new value based on the current one
// counter.update(c => c + 2);
// console.log(counter(), 'update'); // convenience function

// //creating a computed signal //follow other boxes
// const isEven = computed(() => counter() % 2 === 0);


@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})

export default class SignalComponent {
  // counter = signal(0);
  @Input() pushEx: string = '';
  counterService = inject(CounterService);
  counter = this.counterService.counter;
  //creating a computed signal //follow other boxes
  isEven = computed(() => this.counter() % 2 === 0);
  color = computed(() => this.isEven() ? 'red' : 'blue');

  increment() {
    console.log('signal');

    this.counterService.counter.update(c => c + 1);
  }


  valueOne = signal(1);
  valueTwo = signal(15);

  derectiveValue = computed(() => this.valueOne() * this.valueTwo());

  changeValues() {
    this.valueOne.set(2);
    this.valueTwo.set(33);
  }
  ngOnInit(): void {
    this.changeValues();

  }

}
