import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { AppActions } from '../actions/';
import { switchMap, map, takeUntil, withLatestFrom, filter, mergeMap } from 'rxjs/operators';
import { ComicsService } from '@web/shared/services//comics.service';
import { MusicService } from '@web/shared/services//music.service';
import { MoviesService } from '@web/shared/services//movies.service';
import { GamesService } from '@web/shared/services//games.service';
import { isLoaded } from '@web/store/selectors';
import { forkJoin, of } from 'rxjs';
import { INIT, select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { RouterNavigationAction, ROUTER_NAVIGATED, ROUTER_NAVIGATION, ROUTER_REQUEST } from '@ngrx/router-store';
import { ROUTER_INITIALIZER } from '@angular/router';

@Injectable()
export class AppEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_REQUEST),
    withLatestFrom(this.store.pipe(select(isLoaded))),
    filter(([action, loaded]) => {
      return !loaded;
    }),
    switchMap(() => {
      return forkJoin([this.gamesService.getGames(), this.moviesService.getMovies(),
              this.musicService.getMusic(40), this.comicsService.getComics(60)])
              .pipe(
                map((data) => {
                const [games, movies, music, comics] = data;
                return AppActions.loadDataComplete({ games, movies, music, comics });
              })
            );
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
