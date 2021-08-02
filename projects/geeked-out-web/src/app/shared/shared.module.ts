import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CategoryComponent } from './components/category/category-component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [CategoryComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,
    SharedRoutingModule
  ],
  exports: [
    CategoryComponent,
    CommonModule,
    LazyLoadImageModule
  ]
})
export class SharedModule { }
