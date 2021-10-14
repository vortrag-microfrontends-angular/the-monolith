import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page1Module } from './page1/page1.module';
import { Page2Component } from './page2/page2.component';
import { Page2Module } from './page2/page2.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'page1',
    component: Page1Component,
  },
  {
    path: 'page2',
    component: Page2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, Page1Module, Page2Module],
  exports: [RouterModule],
})
export class AppRoutingModule {}
