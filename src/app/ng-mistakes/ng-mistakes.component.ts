import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable, Subscription, interval} from 'rxjs';
import {BookService} from '../core/services/book.service';

@Component({
  selector: 'app-ng-mistakes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-mistakes.component.html',
  styleUrls: ['./ng-mistakes.component.css']
})
export default class NgMistakesComponent {
  booksList$: Observable<string[]>;
  transSubscription?: Subscription;
  list: string[] = [];

  //bookService = inject(BookService);
  constructor(private bookService: BookService) {
    const type: string = 'non-fiction';
   // debugger
    this.booksList$ = this.bookService.getGames(type);
  }

  ngOnInit(): void {
    // interval(100).subscribe(count => {
    //   console.log(count);

    // });
    this.getGames();
  }

  getGames() {
    const type: string = 'non-fiction';
    this.transSubscription = this.bookService.getGames(type).subscribe(res => {
      setTimeout(() => {
        this.list = res;
        // interval(100).subscribe(count => {
        //   console.log(count);

        // });
      }, 100);
    });
  }

  ngOnDestroy(): void {
    this.transSubscription?.unsubscribe();
  }
}
