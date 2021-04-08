import { ComicStore } from '@web/shared/interfaces/comic';
import { Game } from '@web/shared/interfaces/game';
import { MoviesResponse } from '@web/shared/interfaces/movies';
import { MusicResponse } from '@web/shared/interfaces/music';
import { createAction, props } from '@ngrx/store';

export const loadComicData = createAction('[loadComicData] loading...');
export const loadComicDataComplete = createAction('[loadComicDataComplete] Data Loaded', props<{comics: ComicStore}>());
export const loadMusicData = createAction('[loadMusicData] loading...');
export const loadMusicDataComplete = createAction('[loadMusicDataComplete] Data Loaded', props<{music: MusicResponse}>());
export const loadMoviesData = createAction('[loadMoviesData] loading...');
export const loadMoviesDataComplete = createAction('[loadMoviesDataComplete] Data Loaded', props<{movies: MoviesResponse}>());
export const loadGamesData = createAction('[loadGamesData] loading...');
export const loadGamesDataComplete = createAction('[loadGamesDataComplete] Data Loaded', props<{games: Game[]}>());


export type AppActionsUnion = ReturnType<typeof loadComicData | typeof loadComicDataComplete |
                                        typeof loadMusicData | typeof loadMusicDataComplete |
                                        typeof loadMoviesData | typeof loadMoviesDataComplete |
                                        typeof loadGamesData | typeof loadGamesDataComplete>;
