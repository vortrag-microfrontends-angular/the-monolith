import { Component, OnInit } from '@angular/core';
import { JokeFacade } from 'src/app/store/joke/joke.facade';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss'],
})
export class RandomJokeComponent implements OnInit {
  constructor(public readonly facade: JokeFacade) {}

  public ngOnInit(): void {
    this.facade.loadRandomJoke();
  }
}
