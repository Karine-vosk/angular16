import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Building, IList} from 'src/app/core/Ilist.interface';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input() todo: IList = {
    isCompleted: false
  };

  @Input({required: true}) primitiveValue: string = '';

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }

  changeText(): void {
    this.todo.name = 'Text changed from inside';
  }
}
