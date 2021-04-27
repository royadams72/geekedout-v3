import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Preview } from '@web/shared/interfaces/preview';

import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import {getComicPreview, getGamesPreview, getMoviesPreview, getMusicPreview} from '@web/store/selectors';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  comicPreview$ = new Observable<Array<Preview>>();
  musicPreview$ = new Observable<Array<Preview>>();
  gamesPreview$ = new Observable<Array<Preview>>();
  moviesPreview$ = new Observable<Array<Preview>>();

  constructor(private store: Store<State>) {}
  ngOnInit(): void {

  this.store.dispatch(AppActions.loadComicData());
  this.store.dispatch(AppActions.loadMusicData());
  this.store.dispatch(AppActions.loadMoviesData());
  this.store.dispatch(AppActions.loadGamesData());
  this.comicPreview$ = this.store.pipe(select(getComicPreview));
  this.moviesPreview$ = this.store.pipe(select(getMoviesPreview));
  this.musicPreview$ = this.store.pipe(select(getMusicPreview));
  this.gamesPreview$ = this.store.pipe(select(getGamesPreview));
  }

}
