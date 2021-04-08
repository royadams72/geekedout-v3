import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsMainComponent } from './components/comics-main/comics-main.component';
import { CustomersRoutingModule } from './comics.routing';
import { ComicsService } from '@web/shared/services/comics.service';
import { SharedModule } from '@web/shared/shared.module';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';




@NgModule({
  declarations: [ComicsMainComponent, ComicDetailsComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  providers: [ComicsService]
})
export class ComicsModule { }
