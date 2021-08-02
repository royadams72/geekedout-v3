import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailResolver } from '@web/shared/resolvers/detail/detail.resolver';
import { MoviesResolver } from '@web/shared/resolvers/movies/movies.resolver';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { MoviesMainComponent } from './components/movies-main/movies-main.component';

const routes: Routes = [{
  path: '',
  component: MoviesMainComponent,
  resolve : {
    category: MoviesResolver
  }
},
  {
    path: ':id',
    component: MoviesDetailsComponent,
    resolve : {
      detail: DetailResolver
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
