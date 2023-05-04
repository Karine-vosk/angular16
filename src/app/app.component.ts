import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
 // template: '{{ title }}',  // Now compiles!
  imports: [RouterModule, MatTabsModule]
})
export class AppComponent {
  title = 'Angular15App'

}

