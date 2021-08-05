import { ComicDetail, ComicStore } from '@web/shared/interfaces/comic';
import { Game, GameDetail } from '@web/shared/interfaces/game';
import { MovieDetail, MoviesStore } from '@web/shared/interfaces/movies';
import { AlbumDetail, MusicStore } from '@web/shared/interfaces/music';
import { createAction, props } from '@ngrx/store';
import { Preview } from '@web/shared/interfaces/preview';

export const initAppComplete = createAction('[initAppComplete] App initialised');
export const getDetail = createAction(`[getDetail] Getting Detail`, props<{ routeId: string, category: string | undefined}>());
export const loadComics = createAction(`[loadComics] Loading Comics`);
export const loadComicsComplete = createAction(`[loadComicsComplete] Loading Comics Complete`, props<{ comics: ComicStore }>());
export const loadGames = createAction(`[loadGames] Loading Games`);
export const loadGamesComplete = createAction(`[loadGamesComplete] Loading Games Complete`, props<{ games: Game[] }>());
export const loadMovies = createAction(`[loadMovies] Loading Movies`);
export const loadMoviesComplete = createAction(`[loadMoviesComplete] Loading Movies Complete`, props<{ movies: MoviesStore }>());
export const loadMusic = createAction(`[loadMusic] Loading Music`);
export const loadMusicComplete = createAction(`[loadMusic] Loading Music Complete`, props<{ music: MusicStore }>());

export const setPageLoading = createAction(`[setPageLoading] Page Is Loading`, props<{ pageLoading: boolean }>());

export const loadMovieDetails = createAction('[loadMovieDetails] Loading Movie Details');
export const loadMovieDetailsComplete = createAction('[loadMovieDetails] Loading Movie Details Complete',
                                        props<{movieDetails: MovieDetail[]}>());

export const loadMusicDetails = createAction('[loadMusicDetails ] Loading Music Details');
export const loadMusicDetailsComplete = createAction('[loadMusicDetails] Loading Music Details Complete',
                                        props<{musicDetails: AlbumDetail[]}>());

export const setIds = createAction('[Id] Load Ids', props<{ id: string }>());
export const clearStore = createAction('[clearStore] Clear Store');
export const setCurrPrevUrls = createAction('[setCurrPrevUrls] Setting Current and Destination URLs',
                                props<{ currentUrl: string, previousUrl: string}>());
export const setSelectedItem = createAction('[setSelectedItem] Set Selected Item',
                                props<{item: MovieDetail | AlbumDetail | ComicDetail | GameDetail}>());
export const setSearchStatus = createAction('[setSearchStatus] Set Search Term and Search Items',
                                props<{items: Array<Preview>, searchTerm: string}>());
export type AppActionsUnion = ReturnType<typeof setIds | typeof setSelectedItem | typeof loadComics | typeof loadGames | typeof loadMovies |
                                          typeof loadMusic | typeof loadComicsComplete | typeof loadGamesComplete |
                                          typeof loadMoviesComplete | typeof loadMusicComplete | typeof clearStore |
                                          typeof setPageLoading | typeof setCurrPrevUrls>;





