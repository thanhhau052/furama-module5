import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoorterComponent } from './foorter/foorter.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, FoorterComponent],
  exports: [
    NavbarComponent,
    FoorterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
