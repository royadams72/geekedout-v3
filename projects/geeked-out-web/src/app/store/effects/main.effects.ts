import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { AppActions } from '../actions/';
import { switchMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { ComicsService } from '@web/shared/services//comics.service';
import { MusicService } from '@web/shared/services//music.service';
import { MoviesService } from '@web/shared/services//movies.service';
import { GamesService } from '@web/shared/services//games.service';
import { isLoaded, isMovieDetailsLoaded, isMusicDetailsLoaded } from '@web/store/selectors';
import { forkJoin, of } from 'rxjs';
import { Action, select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { RouterNavigationAction, ROUTER_REQUEST } from '@ngrx/router-store';
import { loadMovieDetails, loadMusicDetails } from '../actions/main.actions';

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
              this.musicService.getMusic(40), this.comicsService.getComics(50)])
              .pipe(
                map((data) => {
                const [games, movies, music, comics] = data;
                console.log(data);
                return AppActions.loadDataComplete({ games, movies, music, comics });
              })
            );
    })
  ));

  loadMoviesDetails$ = createEffect(() => this.actions$.pipe(
    ofType<Action>(loadMovieDetails),
    withLatestFrom(this.store.pipe(select(isMovieDetailsLoaded))),
    filter(([action, loaded]) => {
      return !loaded;
    }),
    switchMap(() => {
      return this.moviesService.getDetailsForMovies()
              .pipe(
                map((movies) => {
                console.log('movies');
                return AppActions.loadMovieDetailsComplete({movies});
                })
              );
    })
  ));

  loadMusicDetails$ = createEffect(() => this.actions$.pipe(
    ofType<Action>(loadMusicDetails),
    withLatestFrom(this.store.pipe(select(isMusicDetailsLoaded))),
    filter(([action, loaded]) => {
      return !loaded;
    }),
    switchMap(() => {
      return this.musicService.getMusicDetails(40)
        .pipe(
          map((music) => {
            console.log('music');
            return AppActions.loadMusicDetailsComplete({music});
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
