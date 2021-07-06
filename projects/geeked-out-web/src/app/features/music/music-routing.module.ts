import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailResolver } from '@web/shared/resolvers/detail/detail.resolver';
import { MainResolver } from '@web/shared/resolvers/main/main.resolver';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { MusicMainComponent } from './components/music-main/music-main.component';

const routes: Routes = [{
  path: '',
  component: MusicMainComponent,
  resolve: {
    category: MainResolver
  }
},
{ path: ':id',
  component: MusicDetailsComponent,
  resolve: {
    detail: DetailResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
