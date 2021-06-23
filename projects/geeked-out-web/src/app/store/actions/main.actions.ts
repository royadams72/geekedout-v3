import { ComicDetail, ComicStore } from '@web/shared/interfaces/comic';
import { Game, GameDetail } from '@web/shared/interfaces/game';
import { MovieDetail, MoviesStore } from '@web/shared/interfaces/movies';
import { AlbumDetail, MusicStore } from '@web/shared/interfaces/music';
import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[loadData] loading...');
export const getComicDetail = createAction(`[getComicDetail] Getting Comic Detail`, props<{ routeId: string }>());
export const getGameDetail = createAction(`[getGameDetail] Getting Game Detail`, props<{ routeId: string }>());
export const getMovieDetail = createAction(`[getMovieDetail] Getting Movie Detail`, props<{ routeId: string }>());
export const getAlbumDetail = createAction(`[getAlbumDetail] Getting Album Detail`, props<{ routeId: string }>());
export const setPageLoading = createAction(`[setPageLoading] Page Is Loading`, props<{ pageLoading: boolean }>());
export const loadDataComplete = createAction('[loadDataComplete] Data Loaded', props<{games: Game[], movies: MoviesStore, music: MusicStore, comics: ComicStore}>());
export const setIds = createAction('[Id] Load Ids', props<{ id: string }>());
export const clearStore = createAction('[clearStore] Clear Store');

export const setCurrPrevUrls = createAction('[setCurrPrevUrls] Setting Current and Destination URLs', props<{ currentUrl: string, previousUrl: string}>());
export const setSelectedItem = createAction('[setSelectedItem] Set Selected Item', props<{item: MovieDetail | AlbumDetail | ComicDetail | GameDetail}>());

export type AppActionsUnion = ReturnType<typeof loadData | typeof loadDataComplete | typeof setIds | typeof setSelectedItem | typeof getComicDetail | typeof clearStore |
                                         typeof getGameDetail | typeof getMovieDetail | typeof getAlbumDetail | typeof setPageLoading | typeof setCurrPrevUrls>;





