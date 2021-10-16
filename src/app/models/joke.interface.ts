export interface Joke {
  id: number;
  joke: string;
  categories: string[];
}

export interface JokeRequest {
  type: string;
  value: Joke;
}

export interface JokesRequest {
  type: string;
  value: Array<Joke>;
}
