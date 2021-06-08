import { ComicStore } from '@web/shared/interfaces/comic';
import { Game } from '@web/shared/interfaces/game';
import { MovieDetail, MoviesStore } from '@web/shared/interfaces/movies';
import { AlbumDetail, MusicStore } from '@web/shared/interfaces/music';
import { createAction, props } from '@ngrx/store';

// export const loadComicData = createAction('[loadComicData] loading...');
// export const loadComicDataComplete = createAction('[loadComicDataComplete] Data Loaded', props<{comics: ComicStore}>());
// export const loadMusicData = createAction('[loadMusicData] loading...');
// export const loadMusicDataComplete = createAction('[loadMusicDataComplete] Data Loaded', props<{music: MusicStore}>());
// export const loadMoviesData = createAction('[loadMoviesData] loading...');
// export const loadMoviesDataComplete = createAction('[loadMoviesDataComplete] Data Loaded', props<{movies: MoviesStore}>());
// export const loadGamesData = createAction('[loadGamesData] loading...');
export const getCategoryDetail = createAction('[getCategoryDetail] Getting Detail', props<{category: string, routeId: string, array: string}>());

export const loadData = createAction('[loadData] loading...');
export const loadDataComplete = createAction('[loadDataComplete] Data Loaded', props<{games: Game[], movies: MoviesStore, music: MusicStore, comics: ComicStore}>());

export const setIds = createAction('[Id] Load Ids', props<{ id: string }>());
export const setSelectedItem = createAction('[setSelectedItem] Set Selected Item', props<{item: MovieDetail | AlbumDetail}>());

export type AppActionsUnion = ReturnType<typeof loadData |  typeof loadDataComplete |
                                        typeof setIds | typeof setSelectedItem | typeof getCategoryDetail>;
