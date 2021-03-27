import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicMainComponent } from './components/music-main/music-main.component';

const routes: Routes = [{
  path: '',
  component: MusicMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
