import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { Page2Component } from './page2.component';

@NgModule({
  declarations: [Page2Component],
  exports: [Page2Component],
  imports: [CommonModule, MatButtonModule],
})
export class Page2Module {}
