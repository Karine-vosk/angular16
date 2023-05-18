import {CommonModule} from '@angular/common';
import {Component, Input, inject} from '@angular/core';
import {CounterService} from '../core/services/counter.service';
import {MoreDetailsComponent} from './more-details/more-details.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {IList} from '../core/Ilist.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [CommonModule, MoreDetailsComponent, TodoItemComponent]
})
export default class TodoComponent {
  counterService = inject(CounterService);
  counter: any = this.counterService.counter;
  activeRoute = inject(ActivatedRoute);
  //instead of this
  // constructor(public counterService: CounterService) {

  // }

  isOpen: boolean = false;

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
  primitiveValue: string = 'Primitive Value';

  @Input() query?: string;
  @Input('id') pathId?: string;
  @Input('title') dataTitle?: string;
  @Input('searchData') resolvedData?: any;

  ngOnInit(): void {
    console.log(this.pathId);

    // this.activeRoute.params.subscribe(res => {
    //   console.log(res, 'res');
    // })
  }

  openDetails(): void {
    console.log('log');

    this.isOpen = !this.isOpen;
  }

  onChange(): void {
    this.counter.set(2)
  }

  onChangeText(): void {
    console.log('changeText');
  }

  changeArray(): void {
    //it is changed because it is primitive value
   //  this.primitiveValue = 'it is changed';
    //it doesn't change because it's reference
    //this.todoList[0].name = 'changeText';

   //We do restructuring object
    // this.todoList[0] = {
    //   ...this.todoList[0], name: 'changeText'
    // };
    console.log(this.todoList);

  };
}
