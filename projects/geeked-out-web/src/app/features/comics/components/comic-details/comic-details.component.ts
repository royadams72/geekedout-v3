import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Comic, ComicDetail, ComicStore } from '@web/shared/interfaces/comic';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getItem } from '@web/store/selectors';
// import {  } from '@web/store/selectors';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html'
})
export class ComicDetailsComponent implements OnInit {
  // comicDetail$ = new Observable<ComicDetail>();
  item: ComicDetail = {} as ComicDetail;
  @ViewChild ('bgContainer') bgContainer: ElementRef<HTMLInputElement> = {} as ElementRef ;
  constructor(private store: Store<State>, private renderer: Renderer2) {
    // this.store.dispatch(AppActions.getComicDetail({ routeId: '94887' }));
   }

  ngOnInit(): void {
    this.store.pipe(select(getItem)).subscribe((item) => this.item = item);
    setTimeout(() => {
      if (!this.item) { return; }
      this.renderer.setStyle(this.bgContainer.nativeElement, 'background-image', `url(${this.item.image})`);
    }, 400);

  }

}

