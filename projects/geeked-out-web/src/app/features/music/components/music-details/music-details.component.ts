import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { AlbumDetail, Artists } from '@web/shared/interfaces/music';
import { AppActions } from '@web/store/actions';
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
  albumDetail$: any;
  constructor(private store: Store<State>) {

   }

  ngOnInit(): void {
    // TODO: this action should be despatched in router effects service to update state in reducer function and then get the select detail
    this.albumDetail$ = this.store.pipe(select(getDetail<AlbumDetail>(CategoryType.Music, 'items'))).subscribe(data => {
      this.store.dispatch(AppActions.setSelectedItem({item: data}));
      console.log(data);
    });
  }

}
