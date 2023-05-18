
import {Component, Input} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  template: '{{ title }}',  // Now compiles!
  imports: [RouterModule, MatTabsModule]
})
export class AppComponent {
  id: string = ''

  // @Input() query?: string;
  // @Input('id') pathId?: string;
  // @Input('title') dataTitle?: string;
  // @Input('searchData') resolvedData?: any;
  ngOnInit(): void {
    // this.dataTitle = 'inch vor bn';
    // this.pathId = '222';

    this.id = 'input'

    // console.log(
    //   'do something with the', this.query = 'some-change',
    //   'do something with the,', this.pathId,
    //   'do something with the,', this.dataTitle,
    //   'do something with the', this.resolvedData
    // );

  }
}

