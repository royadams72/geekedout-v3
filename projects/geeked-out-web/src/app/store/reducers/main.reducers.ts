import { Comic, ComicDetail, ComicStore, Items, Price } from '@web/shared/interfaces/comic';
import { Game, GameDetail } from '@web/shared/interfaces/game';
import { Movie, MovieDetail, MoviesStore } from '@web/shared/interfaces/movies';
import { AlbumDetail, Album, Artists, MusicStore } from '@web/shared/interfaces/music';
import { createReducer, on, Action } from '@ngrx/store';
import { AppActions } from '../actions';
import { UiData } from '@web/shared/interfaces/uiData'
import { CategoryType } from '@web/shared/enums/category-type.enum';
export interface AppState {
  comics: ComicStore | undefined;
  music: MusicStore | undefined | any;
  movies: MoviesStore | undefined | any;
  games: Game[] | undefined | any;
  selectedItem?: MovieDetail | AlbumDetail | ComicDetail | GameDetail | undefined;
  uiData: UiData;
}

export const initialAppState: AppState = {
  comics:  undefined,
  music: undefined,
  movies: undefined,
  games: undefined,
  selectedItem: undefined,
  uiData: {} as UiData
};

const moviesImagePath = '';

export const appReducer = createReducer(
    initialAppState,
    on(AppActions.getDetail, getDetail),
    on(AppActions.getComicDetail, mapComicDetail),
    on(AppActions.getGameDetail, mapGameDetail),
    on(AppActions.getMovieDetail, mapMovieDetail),
    on(AppActions.getAlbumDetail, mapAlbumDetail),
    on(AppActions.loadDataComplete,
      (state, {games, movies, music, comics}) =>
      ({ ...state, games, movies, music, comics, uiData: {...state.uiData, uiLoaded: true }})),
    on(AppActions.setPageLoading, (state, { pageLoading }) => ({ ...state, uiData: {...state.uiData, pageLoading }})),
    on(AppActions.setIds, (state, { id }) => ({ ...state, uiData: {...state.uiData, selectedId: id }})),
    on(AppActions.setCurrPrevUrls,
      (state, { currentUrl, previousUrl }) =>
      ({ ...state, uiData: {...state.uiData, currPrevUrls: { currentUrl, previousUrl }}})),
    on(AppActions.setSelectedItem, (state, {item}) => ({ ...state, uiData: {...state.uiData, selectedItem: item }})),
    on(AppActions.setSearchStatus, (state, {items, searchTerm}) =>
      ({ ...state, uiData: {...state.uiData, searchData: {items, searchTerm} }}))
    );

function getDetail(state: AppState , action: {routeId: string, category: string | undefined}): AppState {
  if (action.category === CategoryType.Comics) {
      return mapComicDetail(state ,  {routeId: action.routeId});
  } else if (action.category === CategoryType.Games) {
    return mapGameDetail(state ,  {routeId: action.routeId});
  } else if (action.category === CategoryType.Music) {
    return mapAlbumDetail(state ,  {routeId: action.routeId});
  } else if (action.category === CategoryType.Movies) {
    return mapMovieDetail(state ,  {routeId: action.routeId});
  }


  return state;
}

function mapComicDetail(state: AppState , action: {routeId: string}): AppState {
  if (state && state.comics) {
      const { routeId } = action;
      const item: Comic | undefined = [...state.comics.results].find((comic: Comic) => {
        return comic.id?.toString() ===  routeId;
      });
      const { isbn, description, issueNumber, pageCount, prices, title, urls: [{url: clickThrough}], images: [{ path, extension }],
      dates: [{ date: onsaleDate }], creators: { items: creators } }: any = item;

      const selectedItem: ComicDetail = {
          onsaleDate,
          creators: creators.map((c: Items) => ({ name: c.name, role: c.role })),
          description,
          image: `${path}.${extension}`,
          pageCount,
          printPrice: prices.find((c: Price) => c.type === 'printPrice').price,
          clickThrough,
          title
      };

      return {...state, uiData: {...state.uiData, selectedItem}};

  } else {

    return state;

  }
}

function mapGameDetail(state: AppState, action: {routeId: string}): AppState {
  const { routeId } = action;
  const item: Game | undefined = [...state.games].find((game: Game) => {
    return game.id?.toString() ===  routeId;
  });
  const { description, gamerpower_url, image, instructions, platforms, published_date, title, type, worth }: any = item;

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
  const item: Movie | undefined = [...state?.movies.results].find((movie: Movie) => {
    return movie.id?.toString() ===  routeId;
  });

  const { title, release_date, poster_path, homepage, imdb_id, genres: g, overview}: any = item;
  const genres = g.map((arrayItem: any) => arrayItem.name);
  const selectedItem: MovieDetail = {
    imdb_link: `http://www.imdb.com/title/${imdb_id}`,
    image: `https://image.tmdb.org/t/p/w300${poster_path}`,
    release_date,
    overview,
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
  const tracks = items.map((arrayItem: Artists) => arrayItem.name);
  const artists = artistArray.map((arrayItem: Artists) => ({ name: arrayItem.name, spotifyUrl: arrayItem.external_urls.spotify }));

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
