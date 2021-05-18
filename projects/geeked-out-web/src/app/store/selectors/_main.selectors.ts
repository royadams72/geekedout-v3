import { createSelector } from '@ngrx/store';
import { Game } from '@web/shared/interfaces/game';
import { MoviesResponse } from '@web/shared/interfaces/movies';

import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';

// import { State } from '../reducers';
import { AppState } from '../reducers/main.reducers';


const appState = (state: State) => state.state;

export const games = createSelector(
    appState,
    (state: AppState) => state.games
);

export const movies = createSelector(
    appState,
    (state: AppState) => state.movies
);


export const getGamesPreview = createSelector(
    games,
    (state: Game[]): Preview[] => {
        if (!state) { return []; }
        return state.slice(0, 4).map((el) => {
            return  {image: `${el.image}`, title: el.title};
        });
        // //  need image and title
    }
);

export const getMoviesPreview = createSelector(
    movies,
    (state: MoviesResponse) => {
        if (!state.results) { return []; }
        const imgPath = `${state.imageData.secure_base_url}w300`;
        return state.results.slice(0, 4).map((el) => {
            return  {image: `${imgPath}${el.poster_path}`, title: el.title};
        });
        // //  need image and title

    }
);


