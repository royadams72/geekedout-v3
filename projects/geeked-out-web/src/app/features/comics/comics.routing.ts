import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryResolver } from '@web/shared/resolvers/category.resolver';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';
import { ComicsMainComponent } from './components/comics-main/comics-main.component';




const routes: Routes = [
  {
    path: '',
    component: ComicsMainComponent,
    resolve: {
      category: CategoryResolver
    }
  },
  {
    path: ':id',
    component: ComicDetailsComponent,
    resolve: {
      category: CategoryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
