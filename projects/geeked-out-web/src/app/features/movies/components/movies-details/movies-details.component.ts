import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { MovieDetail } from '@web/shared/interfaces/movies';

import { MoviesService } from '@web/shared/services/movies.service';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getItem, getSearchState, isSearch } from '@web/store/selectors';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html'
})
export class MoviesDetailsComponent implements OnInit {

  item: MovieDetail = {} as MovieDetail;
  isSearch = false;

  @ViewChild ('bgContainer') bgContainer: ElementRef<HTMLInputElement> = {} as ElementRef;

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
