import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Preview } from '@web/shared/interfaces/preview';
import { MusicService } from '@web/shared/services/music.service';

import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors';


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

  constructor(private store: Store<State>, private musicService: MusicService) {
    this.store.dispatch(AppActions.loadComicData());
    this.store.dispatch(AppActions.loadMusicData());
    this.store.dispatch(AppActions.loadMoviesData());
    this.store.dispatch(AppActions.loadGamesData());

  }
  ngOnInit(): void {


  this.comicPreview$ = this.store.pipe(select(getItems(CategoryType.Comics, true, 'results')));
  this.moviesPreview$ = this.store.pipe(select(getItems(CategoryType.Movies, true, 'results')));
  // this.moviesPreview$ = this.store.pipe(select(getMoviesPreview));
  this.musicPreview$ = this.store.pipe(select(getItems(CategoryType.Music, true, 'items' )));
  this.gamesPreview$ = this.store.pipe(select(getItems(CategoryType.Games, true)));
  }

}
