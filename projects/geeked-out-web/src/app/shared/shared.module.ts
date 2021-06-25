import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CategoryComponent } from './components/category/category-component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule
  ],
  exports: [
    CategoryComponent,
    CommonModule
  ]
})
export class SharedModule { }
