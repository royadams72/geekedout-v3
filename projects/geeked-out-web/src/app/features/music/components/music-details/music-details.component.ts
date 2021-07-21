import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Paths } from '@web/shared/enums/paths.enums';
import { Album, AlbumDetail, Artists } from '@web/shared/interfaces/music';
import { State } from '@web/store/reducers';
import { getItem, getSearchState, isSearch } from '@web/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html'
})
export class MusicDetailsComponent implements OnInit {
  item: AlbumDetail = {} as AlbumDetail;
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
