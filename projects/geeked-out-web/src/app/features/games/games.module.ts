import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@web/shared/shared.module';
import { GamesRoutingModule } from './games-routing.module';
import { GamesMainComponent } from './components/games-main/games-main.component';
import { GamesDetailsComponent } from './components/games-details/games-details.component';


@NgModule({
  declarations: [GamesMainComponent, GamesDetailsComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }
