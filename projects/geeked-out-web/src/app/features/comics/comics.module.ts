import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsMainComponent } from './components/comics-main/comics-main.component';
import { CustomersRoutingModule } from './comics.routing';
import { ComicsService } from '../../shared/services/comics.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ComicsMainComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule
  ],
  providers: [ComicsService]
})
export class ComicsModule { }
