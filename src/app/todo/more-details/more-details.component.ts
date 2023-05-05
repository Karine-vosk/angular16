import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class MoreDetailsComponent {
  @Input() exPush: number = 1
 }
