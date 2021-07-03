import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailResolver } from '@web/shared/resolvers/detail/detail.resolver';
import { MusicDetailResolver } from '@web/shared/resolvers/music/music-detail.resolver';
import { MusicMainResolver } from '@web/shared/resolvers/music/music-main.resolver';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { MusicMainComponent } from './components/music-main/music-main.component';

const routes: Routes = [{
  path: '',
  component: MusicMainComponent,
  resolve: {
    category: MusicMainResolver
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
