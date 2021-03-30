import { ComicResponse } from '@web-interfaces/comic';
import { Game } from '@web-interfaces/game';
import { MoviesResponse } from '@web-interfaces/movies';
import { MusicResponse } from '@web-interfaces/music';
import { createAction, props } from '@ngrx/store';

export const loadComicData = createAction('[loadComicData] loading...');
export const loadComicDataComplete = createAction('[loadComicDataComplete] Data Loaded', props<{comics: ComicResponse}>());
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
