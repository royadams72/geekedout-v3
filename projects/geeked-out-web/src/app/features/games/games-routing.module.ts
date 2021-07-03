import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailResolver } from '@web/shared/resolvers/detail/detail.resolver';
import { GamesDetailResolver } from '@web/shared/resolvers/games/games-detail.resolver';
import { GamesMainResolver } from '@web/shared/resolvers/games/games-main.resolver';
import { GamesDetailsComponent } from './components/games-details/games-details.component';
import { GamesMainComponent } from './components/games-main/games-main.component';

const routes: Routes = [ {
  path: '',
  component: GamesMainComponent,
  resolve: {
    category: GamesMainResolver
  }
},
{
  path: ':id',
  component: GamesDetailsComponent,
  resolve: {
    detail: DetailResolver
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
