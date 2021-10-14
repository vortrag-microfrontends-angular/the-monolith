import { Component } from '@angular/core';

import { CounterFacade } from '../store/counter/counter.facade';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component {
  constructor(public readonly facade: CounterFacade) {}
}
