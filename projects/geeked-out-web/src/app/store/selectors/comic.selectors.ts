import { createSelector } from '@ngrx/store';
import { ComicStore } from '@web/shared/interfaces/comic';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { AppState } from '../reducers/main.reducers';


const appState = (state: State) => state.state;

export const comics = createSelector(
    appState,
  (state: AppState) => state.comics
);

export const getAllComics = createSelector(
    comics,
    (state: ComicStore): Preview[] => {
        if (!state.results) { return []; }
        return state.results.map((el) => {
            return  {id: el.id, image: `${el.images[0].path}.${el.images[0].extension}`, title: el.title};
        });
    }
);

export const getComicPreview = createSelector(
    comics,
    (state: ComicStore): Preview[] => {
        if (!state.results) { return []; }
        return state.results.slice(0, 4).map((el) => {
            return  {image: `${el.images[0].path}.${el.images[0].extension}`, title: el.title};
        });
    }
);



