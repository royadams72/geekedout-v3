import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Paths } from '@web/shared/enums/paths.enums';
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
  backGroundImage = '';
  @ViewChild ('image') image: ElementRef<HTMLInputElement> = {} as ElementRef;
  constructor(private store: Store<State>, private renderer: Renderer2) {
   }

  ngOnInit(): void {
    this.store.pipe(select(isSearch)).subscribe((bool) => this.isSearch = bool);
    this.store.pipe(select(getItem)).subscribe((item) => this.item = item);
    setTimeout(() => {
      if (!this.item) { return; }
      this.backGroundImage = `url(${this.item.image})`;
    }, 400);
  }

  onImageError(): void  {
    this.renderer.setAttribute(this.image.nativeElement, 'src', `${Paths.Images}/image404@2x.png`);
    this.backGroundImage = `url(${Paths.Images}/image404@2x.png)`;
  }
}

