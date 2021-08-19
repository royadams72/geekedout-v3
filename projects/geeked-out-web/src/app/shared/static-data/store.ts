import { MoviesArray } from './movies';
import { ComicArray } from './comics';
import { MusicArray } from './music';
import { GamesArray } from './games';


export const StateStub = {
  movies: {
  dates: {maximun: '2021-08-16', minimum: '"2021-06-16"'},
  page: 1,
  results: MoviesArray,
  total_pages: 2,
  total_results: 40,
},
  comics: {
    count: 1,
    limit: 10,
    offset: 0,
    results: ComicArray,
  },
  music: {
    href: 'https://api.spotify.com/v1/browse/new-releases?country=GB&offset=0&limit=40',
    items: MusicArray,
    limit: 20,
    next: '',
    offset: 20,
    previous: 0,
    total: 100
  },
  games: GamesArray,
  uiData: {
    loadedItems: {
      appInit: true,
      musicLoaded: true,
      gamesLoaded: true,
      moviesLoaded: true,
      comicsLoaded: true
    },
    currPrevUrls: {
      currentUrl: '/',
      previousUrl: ''
    },
    pageLoading: false
  },
  router: {
    state: {
      url: '/',
      params: {},
      queryParams: {}
    },
    navigationId: 1
  },
  screen: {
    small: false,
    medium: true,
    large: false
  }
};


