import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category-component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CategoryComponent,
    CommonModule
  ]
})
export class SharedModule { }
