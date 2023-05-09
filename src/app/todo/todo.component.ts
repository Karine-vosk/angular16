import {CommonModule} from '@angular/common';
import {Component, Input, inject} from '@angular/core';
import {CounterService} from '../core/services/counter.service';
import {MoreDetailsComponent} from './more-details/more-details.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {IList} from '../core/Ilist.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [CommonModule, MoreDetailsComponent, TodoItemComponent]
})
export default class TodoComponent {
  counterService = inject(CounterService);
  counter = this.counterService.counter;
  //instead of this
  // constructor(public counterService: CounterService) {

  // }

  isOpen: boolean = false;
  exPush: number = 1;

  // ex for input change detection
  todoList: IList[] = [
    {
      id: 1,
      name: "first-todo item",
      isCompleted: true
    },
    {
      id: 2,
      name: "second-todo item",
      isCompleted: true
    },
    {
      id: 3,
      name: "third-todo item",
      isCompleted: false
    }
  ];
  primitiveValue: string = 'Primitive Value'


  ngOnInit(): void {

  }

  openDetails(): void {
    console.log('log');

    this.isOpen = !this.isOpen;
  }

  onChange(): void {
    this.exPush++;
  }

  onChangeText(): void {
    console.log('changeText');

  }

  changeArray(): void {
    //it is changed because it is primitive value
   // this.primitiveValue = 'it is changed';
    //it doesn't change because it's reference
    //this.todoList[0].name = 'changeText';

   //We do restructuring object
    this.todoList[0] = {
      ...this.todoList[0], name: 'changeText'
    };
    console.log(this.todoList);

  };
}
