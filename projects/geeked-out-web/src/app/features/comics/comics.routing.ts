import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsMainComponent } from './components/comics-main/comics-main.component';




const routes: Routes = [
  {
    path: '',
    component: ComicsMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
