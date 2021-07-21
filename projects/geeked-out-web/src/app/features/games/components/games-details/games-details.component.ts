import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Paths } from '@web/shared/enums/paths.enums';
import { GameDetail } from '@web/shared/interfaces/game';
import { State } from '@web/store/reducers';
import { getItem, getSearchState, isSearch } from '@web/store/selectors';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html'
})
export class GamesDetailsComponent implements OnInit {

  item: GameDetail = {} as GameDetail;
  backGroundImage = '';
  isSearch = false;

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


