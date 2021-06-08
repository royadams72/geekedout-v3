import { Comic, ComicDetail, ComicStore, Items, Price } from '../../shared/interfaces/comic';
import { Game, GameDetail } from '../../shared/interfaces/game';
import { Movie, MovieDetail, MoviesStore } from '../../shared/interfaces/movies';
import { AlbumDetail, Albums, Artists, MusicStore } from '../../shared/interfaces/music';
import { createReducer, on, Action } from '@ngrx/store';
import { AppActions } from '../actions';
import { uiData } from '../../shared/interfaces/uiData'
import { CategoryType } from '@web/shared/enums/category-type.enum';
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

let moviesImagePath: string;
export const appReducer = createReducer(
    initialAppState,
    // on(AppActions.loadComicData, (state) => (state)),
    // on(AppActions.loadComicDataComplete, (state, { comics }) => ({...state, comics})),
    // on(AppActions.loadMusicData, (state) => (state)),
    // on(AppActions.loadMusicDataComplete, (state, { music }) => ({...state, music})),
    // on(AppActions.loadMoviesData, (state) => (state)),
    // on(AppActions.loadMoviesDataComplete, (state, { movies }) => ({...state, movies})),
    // on(AppActions.loadGamesData, (state) => (state)),
    on(AppActions.getCategoryDetail, getCategoryDetail),
    on(AppActions.loadData, loadData),
    // on(AppActions.loadDataComplete, (state, {games, movies, music, comics}) => ({...state, games, movies, music, comics, uiData: {...state.uiData, uiLoaded: true}})),
    on(AppActions.loadDataComplete, loadDataComplete),
    on(AppActions.setIds, (state, { id }) => ({ ...state, uiData: {...state.uiData, selectedId:id }})),
    on(AppActions.setSelectedItem, setItem)
    );

function getCategoryDetail(state: any, action: any): AppState {
  const {category, array, routeId} = action;

  const item = [...state[category][array]].find((data: any)=> {

    return data.id.toString() === routeId;
  });

  const { isbn, description, issueNumber, pageCount, prices, title, urls, images: [{ path, extension }],
  dates: [{ date: onsaleDate }], creators: { items: creators } }: any = item;
  const purchaseUrl = urls.find((c: any) => c.type === 'purchase');

  const selectedItem = {
      onsaleDate,
      creators: creators.map((c: Items) => ({ name: c.name, role: c.role })),
      description,
      image: `${path}.${extension}`,
      isbn,
      issueNumber,
      pageCount,
      printPrice: prices.find((c: Price) => c.type === 'printPrice').price,
      purchaseUrl: purchaseUrl || undefined,
      title
  };


  // console.log({...state[category][array][routeId]});

  console.log(selectedItem);
  // const itemDetail = mapDetail(category, item);
  // console.log(itemDetail);
  return {...state, uiData: {...state.uiData, selectedItem}};
  // return {...state}
}

function setItem(state: AppState, action: any): AppState {
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

/**  Helper functions */
function mapDetail(category: string, selectedItem: any | undefined): any | undefined {
  if (!selectedItem) { return; }
  let data;
  if (category === CategoryType.Comics) {
      data = comicDetail(selectedItem);
  } else if (category === CategoryType.Music) {
      data = albumDetail(selectedItem);
  } else if (category === CategoryType.Movies) {
      data = movieDetail(selectedItem);
  } else if (category === CategoryType.Games) {
      data = gameDetail(selectedItem);
  }
  return data;
}


function comicDetail(selectedItem: Comic) : ComicDetail | undefined {
  if (!selectedItem) { return; }
  const { isbn, description, issueNumber, pageCount, prices, title, urls, images: [{ path, extension }],
  dates: [{ date: onsaleDate }], creators: { items: creators } }: any = selectedItem;
  const purchaseUrl = urls.find((c: any) => c.type === 'purchase');
  return {
      onsaleDate,
      creators: creators.map((c: Items) => ({ name: c.name, role: c.role })),
      description,
      image: `${path}.${extension}`,
      isbn,
      issueNumber,
      pageCount,
      printPrice: prices.find((c: Price) => c.type === 'printPrice').price,
      purchaseUrl: purchaseUrl || undefined,
      title
  };
}

function albumDetail(selectedItem: Albums): AlbumDetail | undefined {
  if (!selectedItem) { return; }
  const { name, artists: artistArray,
      images: [, {url: image}], external_urls: {spotify: spotifyLink }, release_date , tracks: {items}} = selectedItem;
  const tracks = items.map((item: Artists) => item.name);
  const artists = artistArray.map((item: Artists) => ({ name: item.name, spotifyUrl: item.external_urls.spotify}));
  return {
      name,
      artists,
      spotify_link: spotifyLink,
      image,
      release_date,
      tracks
  };
}

function movieDetail(selectedItem: Movie): MovieDetail | undefined {
  if (!selectedItem) { return; }
  const { title, release_date, poster_path, homepage, imdb_id } = selectedItem;
  const genres  = selectedItem.genres.map((item: any) => item.name);
  // console.log(genres, `${moviesImagePath}${poster_path}`, homepage, `http://www.imdb.com/title/${imdb_id}`);
  return {
      imdb_link: `http://www.imdb.com/title/${imdb_id}`,
      image: `${moviesImagePath}${poster_path}`,
      release_date,
      genres,
      homepage,
      title
  };
}

function gameDetail(selectedItem: Game): GameDetail | undefined {
  if (!selectedItem) { return; }
  const { description, gamerpower_url, image, instructions, platforms, published_date, title, type, worth } = selectedItem;
  // console.log(description, gamerpower_url, image, instructions, platforms, title, type, worth);
  return {
      description,
      gamerpower_url,
      image,
      instructions,
      platforms,
      published_date,
      title,
      type,
      worth
  };
}
export function reducer(state: AppState | undefined, action: Action): AppState {
  return appReducer(state, action);
}
