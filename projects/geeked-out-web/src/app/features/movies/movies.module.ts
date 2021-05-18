import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@web/shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesMainComponent } from './components/movies-main/movies-main.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';


@NgModule({
  declarations: [MoviesMainComponent, MoviesDetailsComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
