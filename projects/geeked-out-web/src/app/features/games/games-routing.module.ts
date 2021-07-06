import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailResolver } from '@web/shared/resolvers/detail/detail.resolver';
import { MainResolver } from '@web/shared/resolvers/main/main.resolver';
import { GamesDetailsComponent } from './components/games-details/games-details.component';
import { GamesMainComponent } from './components/games-main/games-main.component';

const routes: Routes = [ {
  path: '',
  component: GamesMainComponent,
  resolve: {
    category: MainResolver
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
