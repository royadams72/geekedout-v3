import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { AppActions } from '../actions/';
import { switchMap, map, takeUntil, withLatestFrom, filter, mergeMap } from 'rxjs/operators';
import { ComicsService } from '@web/shared/services//comics.service';
import { MusicService } from '@web/shared/services//music.service';
import { MoviesService } from '@web/shared/services//movies.service';
import { GamesService } from '@web/shared/services//games.service';
import { isLoaded } from '@web/store/selectors';
import { forkJoin, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { ROUTER_NAVIGATED, ROUTER_NAVIGATION, ROUTER_REQUEST } from '@ngrx/router-store';

@Injectable()
export class AppEffects {

  // loadData$ = createEffect(() => this.actions$.pipe(
  //   ofType<any>(AppActions.loadData),
  //   withLatestFrom(this.store.pipe(select(isLoaded))),
  //   filter(([data, loaded]) => {
  //     return !loaded;
  //   }),
  //   switchMap(() => {
  //     return forkJoin([this.gamesService.getGames(), this.moviesService.getMovies(), this.musicService.getMusic(40), this.comicsService.getComics(40)]).pipe(
  //       map((data) => {
  //         const [games, movies, music, comics] = data;
  //         return AppActions.loadDataComplete({ games, movies, music, comics });
  //       })
  //     )
  //   })
  // ));

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType<any>(ROUTER_NAVIGATION),
    withLatestFrom(this.store.pipe(select(isLoaded))),
    filter(([action, loaded]) => {
      return !loaded;
    }),
    switchMap(() => {
      return forkJoin([this.gamesService.getGames(), this.moviesService.getMovies(), this.musicService.getMusic(40), this.comicsService.getComics(40)]).pipe(
        map((data) => {
          const [games, movies, music, comics] = data;
          return AppActions.loadDataComplete({ games, movies, music, comics });
        })
      )
    })
  ));

  constructor(
    private actions$: Actions,
    private comicsService: ComicsService,
    private musicService: MusicService,
    private moviesService: MoviesService,
    private gamesService: GamesService,
    private store: Store<State>
  ) { }

}
