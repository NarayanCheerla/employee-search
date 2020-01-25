import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WelcomeRoutingModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
