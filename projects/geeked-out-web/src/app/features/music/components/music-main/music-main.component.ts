import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Preview } from '@web/shared/interfaces/preview';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors/';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-music-main',
  templateUrl: './music-main.component.html'
})
export class MusicMainComponent implements OnInit {
  store$ = new Observable<Array<Preview>>();
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // TODO: This action needs to be called and checked in resolver
    // this.store.dispatch(AppActions.loadMusicDetails());
    this.store$ = this.store.pipe(select(getItems(CategoryType.Music, false, 'items')));
  }

}
