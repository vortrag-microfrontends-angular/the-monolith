import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { RandomJokeModule } from '../../components/random-joke/random-joke.module';
import { Page2Component } from './page2.component';

@NgModule({
  declarations: [Page2Component],
  exports: [Page2Component],
  imports: [CommonModule, MatButtonModule, RandomJokeModule],
})
export class Page2Module {}
