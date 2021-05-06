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
export const getSubstate = () => {
    createSelector(
        appState,
        (state: AppState) => state.comics
    );
};
const getRouteID = createSelector(
    appState,
    (state: AppState) => {
        return +state.selectedId;
    }
);

export const getSubState = (subState: string): any => {
   return createSelector(
            appState,
            (state: any) => state[`${subState}`]
        );


};

export const getDetail = <T, U, D>(subState: string, arrayName: any): any => {
    return createSelector(
        getSubState(subState),
        getRouteID,
        (state: any, routeId: number): any | U => {
            const selectedItem: Comic | undefined = state[`${arrayName}`].find((item: any): boolean => {
                // console.log(comic.id === routeId);
                console.log(appState);
                return item.id === routeId;
            });
            return selectedItem ? mapComicDetail(selectedItem) : undefined;
        }
    );


 };
// export const getComicDetail = createSelector(
//     getSubState('comics'),
//     getRouteID,
//     (state: ComicStore, routeId: number): ComicDetail | undefined => {
//         const selectedComic: Comic | undefined = state.results.find((comic: Comic): boolean => {
//             // console.log(comic.id === routeId);
//             console.log(appState);
//             return comic.id === routeId;
//         });
//         return selectedComic ? mapComicDetail(selectedComic) : undefined;
//     }
// );

export const getAllComics = createSelector(
    comics,
    (state: ComicStore): Preview[] => {
        if (!state.results) { return []; }
        return state.results.map((el) => {
            return { id: el.id, image: `${el.images[0].path}.${el.images[0].extension}`, title: el.title };
        });
    }
);

export const getComicPreview = createSelector(
    comics,
    (state: ComicStore): Preview[] => {
        if (!state.results) { return []; }
        return state.results.slice(0, 4).map((el) => {
            return { image: `${el.images[0].path}.${el.images[0].extension}`, title: el.title };
        });
    }
);


// function mapComicDetail<T, U>(selectedComic: Comic): ComicDetail | undefined {
//     if (!selectedComic) { return; }
//     console.log(selectedComic);
//     const { isbn, description, issueNumber, pageCount, prices, title, urls, images: [{ path, extension }],
//     dates: [{ date: onsaleDate }], creators: { items: creators } }: any = selectedComic;
//     const purchaseUrl = urls.find((c: any) => c.type === 'purchase');

//     const comic: ComicDetail = {
//         onsaleDate,
//         creators: creators.map((c: Items) => ({ name: c.name, role: c.role })),
//         description,
//         image: `${path}.${extension}`,
//         isbn,
//         issueNumber,
//         pageCount,
//         printPrice: prices.find((c: Price) => c.type === 'printPrice').price,
//         purchaseUrl: purchaseUrl || undefined,
//         title
//     };
//     return comic;
// }

function mapComicDetail(selectedComic: Comic | undefined): ComicDetail | undefined {
    if (!selectedComic) { return; }
    console.log(selectedComic);
    const { isbn, description, issueNumber, pageCount, prices, title, urls, images: [{ path, extension }],
    dates: [{ date: onsaleDate }], creators: { items: creators } }: any = selectedComic;
    const purchaseUrl = urls.find((c: any) => c.type === 'purchase');

    const comic = {
        onsaleDate,
        creators: creators.map((c: Items) => ({ name: c.name, role: c.role })),
        description,
        image: `${path}.${extension}`,
        isbn,
        issueNumber,
        pageCount,
        printPrice: prices.find((c: Price) => c.type === 'printPrice').price,
        purchaseUrl: purchaseUrl || undefined,
        title
    };
    return comic;
}



