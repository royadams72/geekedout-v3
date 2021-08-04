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
import { loadComics, loadGames, loadMovieDetails, loadMovies, loadMusic, loadMusicDetails } from '../actions/main.actions';

@Injectable()
export class AppEffects {

  initApp$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_REQUEST),
    withLatestFrom(this.store.pipe(select(isLoaded))),
    filter(([action, loadedItems]) => {
      // const isLoadedItems = loaded ?  Object.values(loaded).filter(item => item === true).length : undefined;
      // console.log(loadedItems?.appInit);
      return !loadedItems?.appInit;
    }),
    switchMap(() => {
      return forkJoin([of(this.store.dispatch(AppActions.loadComics())), of(this.store.dispatch(AppActions.loadMovies())),
                      of(this.store.dispatch(AppActions.loadMusic())), of(this.store.dispatch(AppActions.loadGames()))])
                      .pipe(map(() => AppActions.initAppComplete()))
    })
  ), );

  loadComics$ = createEffect(() => this.actions$.pipe(
    ofType<Action>(loadComics),
    withLatestFrom(this.store.pipe(select(isLoaded))),
    filter(([action, loadedItems]) => {
      // console.log(loadedItems?.comicsLoaded);
      return !loadedItems?.comicsLoaded;
    }),
    switchMap(() => {
      return this.comicsService.getComics(50)
          .pipe(
            map((comics) => {
            // console.log(comics);
            return AppActions.loadComicsComplete({comics});
            })
          );
    })
  ));

  loadGames$ = createEffect(() => this.actions$.pipe(
    ofType<Action>(loadGames),
    withLatestFrom(this.store.pipe(select(isLoaded))),
    filter(([action, loadedItems]) => {
      // console.log(loadedItems?.gamesLoaded);
      return !loadedItems?.gamesLoaded;
    }),
    switchMap(() => {
      return this.gamesService.getGames()
          .pipe(
            map((games) => {
            // console.log(games);
            return AppActions.loadGamesComplete({games});
            })
          );
    })
  ));

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType<Action>(loadMovies),
    withLatestFrom(this.store.pipe(select(isLoaded))),
    filter(([action, loadedItems]) => {
      console.log(loadedItems?.moviesLoaded);
      return !loadedItems?.moviesLoaded;
    }),
    switchMap(() => {
      return this.moviesService.getMovies()
          .pipe(
            map((movies) => {
            console.log(movies);
            return AppActions.loadMoviesComplete({movies});
            })
          );
    })
  ));

  loadMusic$ = createEffect(() => this.actions$.pipe(
    ofType<Action>(loadMusic),
    withLatestFrom(this.store.pipe(select(isLoaded))),
    filter(([action, loadedItems]) => {
      console.log(loadedItems?.musicLoaded);
      return !loadedItems?.musicLoaded;
    }),
    switchMap(() => {
      return this.musicService.getMusic(40)
          .pipe(
            map((music) => {
            // console.log(music);
            return AppActions.loadMusicComplete({music});
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
