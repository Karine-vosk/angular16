import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private gameUrl = 'https://simple-books-api.glitch.me/books';
  constructor(private http: HttpClient) { }

  getGames(type: string): Observable<any[]> {
    const params = new HttpParams();
    params.set('query', type);
    return this.http.get<string[]>(this.gameUrl, {params}).pipe(map(res => res.map(res => new Object(res))));
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
