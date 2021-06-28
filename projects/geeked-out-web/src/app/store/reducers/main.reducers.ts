import { Comic, ComicDetail, ComicStore, Items, Price } from '@web/shared/interfaces/comic';
import { Game, GameDetail } from '@web/shared/interfaces/game';
import { Movie, MovieDetail, MoviesStore } from '@web/shared/interfaces/movies';
import { AlbumDetail, Album, Artists, MusicStore } from '@web/shared/interfaces/music';
import { createReducer, on, Action } from '@ngrx/store';
import { AppActions } from '../actions';
import { uiData } from '@web/shared/interfaces/uiData'
import { CategoryType } from '@web/shared/enums/category-type.enum';
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

const moviesImagePath = '';

export const appReducer = createReducer(
    initialAppState,
    on(AppActions.loadData, (state) => (state)),
    on(AppActions.getComicDetail, mapComicDetail),
    on(AppActions.getGameDetail, mapGameDetail),
    on(AppActions.getMovieDetail, mapMovieDetail),
    on(AppActions.getAlbumDetail, mapAlbumDetail),
    on(AppActions.loadDataComplete,
      (state, {games, movies, music, comics}) =>
      ({ ...state, games, movies, music, comics, uiData: {...state.uiData, uiLoaded: true }})),
    on(AppActions.setPageLoading, (state, { pageLoading }) => ({ ...state, uiData: {...state.uiData, pageLoading }})),
    on(AppActions.setIds, (state, { id }) => ({ ...state, uiData: {...state.uiData, selectedId:id }})),
    on(AppActions.setCurrPrevUrls,
      (state, { currentUrl, previousUrl }) =>
      ({ ...state, uiData: {...state.uiData, currPrevUrls: { currentUrl, previousUrl }}})),
    on(AppActions.setSelectedItem, (state, {item}) => ({ ...state, uiData: {...state.uiData, selectedItem: item }}))
    );

function mapComicDetail(state: AppState, action: {routeId: string}): AppState {
  const { routeId } = action;
  const item: Comic | undefined = [...state.comics.results].find((comic: Comic) => {
    return comic.id?.toString() ===  routeId;
  });
  const { isbn, description, issueNumber, pageCount, prices, title, urls,  images,
  dates: [{ date: onsaleDate }], creators: { items: creators } }: any = item;
  const purchaseUrl = urls.find((c: any) => c.type === 'purchase');
  const image = images.length > 0 ? `${images[0].path}.${images[0].extension}` : '';
  const selectedItem: ComicDetail = {
      onsaleDate,
      creators: creators.map((c: Items) => ({ name: c.name, role: c.role })),
      description,
      image,
      isbn,
      issueNumber,
      pageCount,
      printPrice: prices.find((c: Price) => c.type === 'printPrice').price,
      purchaseUrl: purchaseUrl || undefined,
      title
  };

  return {...state, uiData: {...state.uiData, selectedItem}};
}

function mapGameDetail(state: AppState, action: {routeId: string}): AppState {
  const { routeId } = action;
  const item: Game | undefined = [...state.games].find((game: Game) => {
    return game.id?.toString() ===  routeId;
  });
  const { description, gamerpower_url, image, instructions, platforms, published_date, title, type, worth }:any = item;

  const selectedItem: GameDetail = {
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
  return {...state, uiData: {...state.uiData, selectedItem}};
}

function mapMovieDetail(state: AppState, action: {routeId: string}): AppState {
  const { routeId } = action;
  const item: Movie | undefined = [...state.movies.results].find((movie: Movie) => {
    return movie.id?.toString() ===  routeId;
  });

  const { title, release_date, poster_path, homepage, imdb_id, genres: g }: any = item;
  const genres = g.map((item: any) => item.name);
  const selectedItem: MovieDetail = {
    imdb_link: `http://www.imdb.com/title/${imdb_id}`,
    image: `${moviesImagePath}${poster_path}`,
    release_date,
    genres,
    homepage,
    title
};
  return {...state, uiData: {...state.uiData, selectedItem}};
}

function mapAlbumDetail(state: AppState, action: { routeId: string }): AppState {
  const { routeId } = action;

  const item: Album | undefined = [...state.music.items].find((album: Album) => {
    return album.id?.toString() === routeId;
  });

  const { name, artists: artistArray,
    images: [, { url: image }], external_urls: { spotify: spotifyLink }, release_date, tracks: { items } }: any = item;
  const tracks = items.map((item: Artists) => item.name);
  const artists = artistArray.map((item: Artists) => ({ name: item.name, spotifyUrl: item.external_urls.spotify }));

  const selectedItem: AlbumDetail = {
    name,
    artists,
    spotify_link: spotifyLink,
    image,
    release_date,
    tracks
  };

  return { ...state, uiData: { ...state.uiData, selectedItem } };
}

export function reducer(state: AppState | undefined, action: Action): AppState {
  return appReducer(state, action);
}
