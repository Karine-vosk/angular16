import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private gameUrl = 'https://simple-books-api.glitch.me/books';
  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get<any>(this.gameUrl, {
      // params: {
      //   type
      // }
    });
  }

   foo = new Observable((subscriber) => {
    console.log('Hello');
    subscriber.next(42);
    subscriber.next(100);
    subscriber.next(200);
    setTimeout(() => {
      subscriber.next(300); // happens asynchronously
    }, 1000);
  });


}
