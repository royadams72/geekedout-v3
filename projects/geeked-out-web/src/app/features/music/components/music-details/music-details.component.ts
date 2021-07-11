import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Album, AlbumDetail, Artists } from '@web/shared/interfaces/music';
import { State } from '@web/store/reducers';
import { getItem } from '@web/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html'
})
export class MusicDetailsComponent implements OnInit {
  // $albumDetail = new Observable<Artists>();
  item: AlbumDetail = {} as AlbumDetail;
  @ViewChild ('bgContainer') bgContainer: ElementRef<HTMLInputElement> = {} as ElementRef ;
  constructor(private store: Store<State>, private renderer: Renderer2) {

   }

  ngOnInit(): void {
    this.store.pipe(select(getItem)).subscribe((item) => this.item = item);
    setTimeout(() => {
      if (!this.item) { return; }
      this.renderer.setStyle(this.bgContainer.nativeElement, 'background-image', `url(${this.item.image})`);
    }, 400);
  }


}
