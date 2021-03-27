import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesMainComponent } from './components/games-main/games-main.component';

const routes: Routes = [ {
  path: '',
  component: GamesMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
