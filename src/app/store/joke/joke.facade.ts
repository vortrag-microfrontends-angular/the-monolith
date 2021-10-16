import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadJoke, loadJokes } from './joke.actions';
import { selectJokes, selectRandomJoke } from './joke.selectors';

@Injectable({ providedIn: 'root' })
export class JokeFacade {
  public readonly collection$ = this.store.select(selectJokes);
  public readonly randomJoke$ = this.store.select(selectRandomJoke);

  constructor(private readonly store: Store) {}

  public loadRandomJoke(): void {
    this.store.dispatch(loadJoke());
  }

  public loadJokes(num: number = 10): void {
    this.store.dispatch(loadJokes({ num }));
  }
}
