import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesMainComponent } from './components/movies-main/movies-main.component';
const routes: Routes = [  {
  path: '',
  component: MoviesMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
