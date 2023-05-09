import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import {TruncatePipe} from 'src/app/core/truncate.pipe';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
  template: '{{ title }}',
})
export class SecondPageComponent {

}
