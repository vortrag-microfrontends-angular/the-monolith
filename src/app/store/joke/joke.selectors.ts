import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromJoke from './joke.reducer';

export const selectJokeState = createFeatureSelector<fromJoke.State>(fromJoke.jokeFeatureKey);

export const selectRandomJoke = createSelector(selectJokeState, (state) => state.randomJoke);
export const selectJokes = createSelector(selectJokeState, (state) => state.collection);
export const selectError = createSelector(selectJokeState, (state) => state.error);
