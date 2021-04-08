import { NgModule } from '@angular/core';
import { SharedModule } from '@web/shared/shared.module';
// import { CommonModule } from '@angular/common';
// import { CategoryComponent } from '@web/shared/components/category/category-component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
