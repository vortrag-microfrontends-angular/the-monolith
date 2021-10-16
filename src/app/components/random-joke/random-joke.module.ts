import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RandomJokeComponent } from './random-joke.component';

@NgModule({
  declarations: [RandomJokeComponent],
  exports: [RandomJokeComponent],
  imports: [CommonModule],
})
export class RandomJokeModule {}
