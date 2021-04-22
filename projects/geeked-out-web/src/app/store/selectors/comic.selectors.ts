import { createSelector } from '@ngrx/store';
import { Comic, ComicDetail, ComicStore, ImageModel, Items, Obj, Price } from '@web/shared/interfaces/comic';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { AppState } from '../reducers/main.reducers';


const appState = (state: State) => state.state;


export const comics = createSelector(
    appState,
    (state: AppState) => state.comics
);

export const getRouteID = createSelector(
  appState,
  (state: AppState) => {
      return +state.selectedId;
    }
);
export const getComicDetail = createSelector(
    comics,
    getRouteID,
    (state: ComicStore, routeId: number): ComicDetail | undefined =>  {
    const selectedComic: Comic = state.results.find((comic: Comic ): boolean => {
        // console.log(comic.id === routeId);
        return comic.id === routeId;
    })!;
    return mapComicDetail(selectedComic);
}
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


function mapComicDetail(selectedComic: Comic ): ComicDetail | undefined {
    if(!selectedComic) { return; }
    const {isbn, description, issueNumber,  pageCount, prices, title, urls ,images:[{path,extension}], dates: [{date:onsaleDate}], creators:{items: creators}}: any = selectedComic;
    let comic: ComicDetail = {
        onsaleDate,
        creators: creators.map((c: Items) => {return {name: c.name, role: c.role};}),
        description,
        image: `${path}.${extension}`,
        isbn,
        issueNumber,
        pageCount,
        printPrice: prices.find((c: Price) => c.type === 'printPrice').price,
        purchaseUrl: urls.find((c: any) => c.type === 'purchase').url,
        title
    };
    return comic;
    }





