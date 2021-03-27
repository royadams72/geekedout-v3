import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesMainComponent } from './components/games-main/games-main.component';


@NgModule({
  declarations: [GamesMainComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
