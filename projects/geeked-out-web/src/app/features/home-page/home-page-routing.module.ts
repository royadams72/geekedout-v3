import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageResolver } from '@web/shared/resolvers/home-page/home-page.resolver';
import { HomePageComponent } from './home-page.component';


const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  resolve: {
    isLoaded: HomePageResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
