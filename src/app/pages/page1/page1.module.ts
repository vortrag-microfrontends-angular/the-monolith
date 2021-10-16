import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { Page1Component } from './page1.component';

@NgModule({
  declarations: [Page1Component],
  exports: [Page1Component],
  imports: [CommonModule, MatButtonModule],
})
export class Page1Module {}
