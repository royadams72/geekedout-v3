import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesDetailsComponent } from './components/games-details/games-details.component';
import { GamesMainComponent } from './components/games-main/games-main.component';

const routes: Routes = [ {
  path: '',
  component: GamesMainComponent
},
{
  path: ':id',
  component: GamesDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
