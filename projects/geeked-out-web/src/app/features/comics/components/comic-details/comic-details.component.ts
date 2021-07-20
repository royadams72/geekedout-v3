import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ComicDetail } from '@web/shared/interfaces/comic';
import { State } from '@web/store/reducers';
import { getCurrPrevUrls, getItem, getSearchState, isSearch } from '@web/store/selectors';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html'
})
export class ComicDetailsComponent implements OnInit {
  // comicDetail$ = new Observable<ComicDetail>();
  item: ComicDetail = {} as ComicDetail;
  isSearch = false;
  @ViewChild ('bgContainer') bgContainer: ElementRef<HTMLInputElement> = {} as ElementRef ;
  constructor(private store: Store<State>, private renderer: Renderer2) {
   }

  ngOnInit(): void {
    this.store.pipe(select(isSearch)).subscribe((bool) => this.isSearch = bool);
    this.store.pipe(select(getItem)).subscribe((item) => this.item = item);
    setTimeout(() => {
      if (!this.item) { return; }
      this.renderer.setStyle(this.bgContainer.nativeElement, 'background-image', `url(${this.item.image})`);
    }, 400);

  }

}

