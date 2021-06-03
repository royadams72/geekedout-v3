import { Comic, ComicStore } from '../../shared/interfaces/comic';
import { Game } from '../../shared/interfaces/game';
import { MovieDetail, MoviesStore } from '../../shared/interfaces/movies';
import { AlbumDetail, MusicStore } from '../../shared/interfaces/music';
import { createReducer, on, Action } from '@ngrx/store';
import { AppActions } from '../actions';
import { uiData } from '../../shared/interfaces/uiData'
export const idReducerFeatureKey = 'featureName';
export interface AppState {
  comics: ComicStore;
  music: MusicStore;
  movies: MoviesStore;
  games: Game[];
  selectedItem: MovieDetail | AlbumDetail | undefined;
  uiData: uiData;
}

export const initialAppState: AppState = {
  comics: {} as ComicStore,
  music: {} as MusicStore,
  movies: {} as MoviesStore,
  games: [] as Game[],
  selectedItem: undefined,
  uiData: {} as uiData
};


export const appReducer = createReducer(
    initialAppState,
    // on(AppActions.loadComicData, (state) => (state)),
    // on(AppActions.loadComicDataComplete, (state, { comics }) => ({...state, comics})),
    // on(AppActions.loadMusicData, (state) => (state)),
    // on(AppActions.loadMusicDataComplete, (state, { music }) => ({...state, music})),
    // on(AppActions.loadMoviesData, (state) => (state)),
    // on(AppActions.loadMoviesDataComplete, (state, { movies }) => ({...state, movies})),
    // on(AppActions.loadGamesData, (state) => (state)),
    // on(AppActions.loadGamesDataComplete, (state, { games }) => ({...state, games})),
    on(AppActions.loadData, loadData),
    // on(AppActions.loadDataComplete, (state, {games, movies, music, comics}) => ({...state, games, movies, music, comics, uiData: {...state.uiData, uiLoaded: true}})),
    on(AppActions.loadDataComplete, loadDataComplete),
    on(AppActions.setIds, (state, { id }) => ({ ...state, uiData: {...state.uiData, selectedId:id }})),
    on(AppActions.setSelectedItem, setItem)
    );


function setItem(state: any, action: any): AppState {
  return { ...state, uiData: {...state.uiData, selectedItem: action.item }};
}

function loadData(state: any, action: any): any {
  // if(state.uiData.uiLoaded) { return; }
  console.log(action);
  return state;
}

function loadDataComplete(state: any, action: any): any {
    return { ...state, games: action.games, movies: action.movies, music: action.music, comics: action.comics , uiData: {...state.uiData, uiLoaded: true }};

}
export function reducer(state: AppState | undefined, action: Action): AppState {
  return appReducer(state, action);
}
