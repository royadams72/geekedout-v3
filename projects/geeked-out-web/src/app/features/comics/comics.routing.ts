import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicDetailResolver } from '@web/shared/resolvers/comic/comic-detail.resolver';
import { ComicMainResolver } from '@web/shared/resolvers/comic/comic-main.resolver';
import { DetailResolver } from '@web/shared/resolvers/detail/detail.resolver';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';
import { ComicsMainComponent } from './components/comics-main/comics-main.component';


const routes: Routes = [
  {
    path: '',
    component: ComicsMainComponent,
    resolve: {
      category: ComicMainResolver
    }
  },
  {
    path: ':id',
    component: ComicDetailsComponent,
    resolve: {
      detail: DetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
