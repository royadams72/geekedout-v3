import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { MusicMainComponent } from './components/music-main/music-main.component';

const routes: Routes = [{
  path: '',
  component: MusicMainComponent
},
{ path: ':id',
component: MusicDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
