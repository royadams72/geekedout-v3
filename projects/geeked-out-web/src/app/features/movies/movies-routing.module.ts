import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailResolver } from '@web/shared/resolvers/movies/movies-detail.resolver';
import { MoviesMainResolver } from '@web/shared/resolvers/movies/movies-main.resolver';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { MoviesMainComponent } from './components/movies-main/movies-main.component';
const routes: Routes = [  {
  path: '',
  component: MoviesMainComponent,
  resolve : {
    category: MoviesMainResolver
  }
},
{
path: ':id',
component: MoviesDetailsComponent,
resolve : {
  detail: MoviesDetailResolver
}
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
