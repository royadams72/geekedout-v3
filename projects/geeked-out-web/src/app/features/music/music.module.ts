import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@web/shared/shared.module';
import { MusicRoutingModule } from './music-routing.module';
import { MusicMainComponent } from './components/music-main/music-main.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';


@NgModule({
  declarations: [MusicMainComponent, MusicDetailsComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule
  ]
})
export class MusicModule { }
