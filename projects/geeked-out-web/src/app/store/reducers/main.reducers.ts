import { Comic, ComicStore } from '../../shared/interfaces/comic';
import { Game } from '../../shared/interfaces/game';
import { MoviesResponse } from '../../shared/interfaces/movies';
import { MusicResponse } from '../../shared/interfaces/music';
import { createReducer, on, Action } from '@ngrx/store';
import { AppActions } from '../actions';


export interface AppState {
  comics: ComicStore;
  music: MusicResponse;
  movies: MoviesResponse;
  games: Game[];
}

export const initialAppState: AppState = {
  comics: {} as ComicStore,
  music: {} as MusicResponse,
  movies: {} as MoviesResponse,
  games: [] as Game[]
};


export const appReducer = createReducer(
    initialAppState,
    on(AppActions.loadComicData, (state) => (state)),
    on(AppActions.loadComicDataComplete, (state, { comics }) => ({...state, comics})),
    on(AppActions.loadMusicData, (state) => (state)),
    on(AppActions.loadMusicDataComplete, (state, { music }) => ({...state, music})),
    on(AppActions.loadMoviesData, (state) => (state)),
    on(AppActions.loadMoviesDataComplete, (state, { movies }) => ({...state, movies})),
    on(AppActions.loadGamesData, (state) => (state)),
    on(AppActions.loadGamesDataComplete, (state, { games }) => ({...state, games}))
    );


export function reducer(state: AppState | undefined, action: Action): AppState {
  return appReducer(state, action);
}
