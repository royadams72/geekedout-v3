import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { AlbumDetail, Artists } from '@web/shared/interfaces/music';
import { State } from '@web/store/reducers';
import { getDetail } from '@web/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {
  // $albumDetail = new Observable<Artists>();
  albumDetail$:any;
  constructor(private store: Store<State>) {

   }

  ngOnInit(): void {
    this.albumDetail$ = this.store.pipe(select( getDetail<AlbumDetail>(CategoryType.Music, 'items'))).subscribe(data => console.log(data));
  }

}
