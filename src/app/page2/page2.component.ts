import { Component } from '@angular/core';

import { CounterFacade } from '../store/counter/counter.facade';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  constructor(public readonly facade: CounterFacade) {}
}
