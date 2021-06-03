import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { MoviesMainComponent } from './components/movies-main/movies-main.component';
const routes: Routes = [  {
  path: '',
  component: MoviesMainComponent
},
{
path: ':id',
component: MoviesDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
