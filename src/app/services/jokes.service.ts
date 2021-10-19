import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Joke, JokeRequest, JokesRequest } from '../models/joke.interface';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private readonly http: HttpClient) {}

  public getRandomJoke(): Observable<Joke> {
    return this.http
      .get<JokeRequest>('//api.icndb.com/jokes/random?escape=javascript')
      .pipe(map((response) => response.value));
  }

  public getRandomJokes(num: number): Observable<Array<Joke>> {
    return this.http
      .get<JokesRequest>(`//api.icndb.com/jokes/random/${num}?escape=javascript`)
      .pipe(map((response) => response.value));
  }
}
