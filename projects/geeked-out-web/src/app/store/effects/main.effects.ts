import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { AppActions } from '../actions/';
import { switchMap, map, mergeMap, catchError, takeUntil } from 'rxjs/operators';

import { of } from 'rxjs';
import { ComicsService } from '../../shared/services/comics.service';
import { MusicService } from '../../shared/services/music.service';
import { MoviesService } from '../../shared/services/movies.service';
import { GamesService } from '../../shared/services/games.service';
@Injectable()
export class AppEffects {

  loadComicData$ = createEffect(() => this.actions$.pipe(
    ofType<any>(AppActions.loadComicData),
    switchMap((action) => {
      return this.comicsService.getPreview(40).pipe(
        // takeUntil(this.subService.unsubscribe$),
        map((comics) => AppActions.loadComicDataComplete( {comics}))
      );
    })
  ));

  loadMusicData$ = createEffect(() => this.actions$.pipe(
    ofType<any>(AppActions.loadMusicData),
    switchMap((action) => {
      return this.musicService.getMusic(40).pipe(
        // takeUntil(this.subService.unsubscribe$),
        map((music) => AppActions.loadMusicDataComplete( {music}))
      );
    })
  ));

  loadMoviesData$ = createEffect(() => this.actions$.pipe(
    ofType<any>(AppActions.loadMoviesData),
    switchMap((action) => {
      return this.moviesService.getMovies().pipe(
        // takeUntil(this.subService.unsubscribe$),
        map((movies) => AppActions.loadMoviesDataComplete( {movies}))
      );
    })
  ));

  loadGamesData$ = createEffect(() => this.actions$.pipe(
    ofType<any>(AppActions.loadGamesData),
    switchMap((action) => {
      return this.gamesService.getGames().pipe(
        // takeUntil(this.subService.unsubscribe$),
        map((games) => AppActions.loadGamesDataComplete( {games}))
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private comicsService: ComicsService,
    private musicService: MusicService,
    private moviesService: MoviesService,
    private gamesService: GamesService
    // private subService: SubscriptionService
  ) { }

}
