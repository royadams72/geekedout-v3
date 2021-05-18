import { createSelector } from '@ngrx/store';
import { Albums, Artists, MusicStore } from '@web/shared/interfaces/music';
// import { Comic, ComicDetail, ComicStore, ImageModel, Items, Obj, Price } from '@web/shared/interfaces/comic';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { AppState } from '../reducers/main.reducers';


const appState = (state: State) => state.state;


export const albums = createSelector(
    appState,
    (state: AppState) => state.music
);
function setSelectors(){
    const selectors =  {
        ['getRouteID'] : createSelector(
            appState,
            (state: AppState): string => {
                return state.selectedId;
            }
        )
    }
}
const getRouteID = createSelector(
  appState,
  (state: AppState): string => {
      return state.selectedId;
    }
);

export const getDetailm = createSelector(
        albums,
        getRouteID,
        (state: MusicStore, routeId: string): Artists | undefined =>  {
        const item: Artists | undefined = state.items.find((artist: Artists): boolean => {
            return artist.id === routeId;
        });
        return item ? itemDetail(item) : undefined;
    }
);

// function getAll(subState: any) {
//     const getAll = createSelector(
//         subState,
//         (state: any): Preview[] => {
//             if (!state.items) { return []; }
//             return state.items.map((el: any) => {
//                 return itemPreview(el);
//             });
//         }
//     );
// }

export const getAllAlbums = createSelector(
    albums,
    (state: MusicStore): Preview[] => {
        if (!state.items) { return []; }
        return state.items.map((el) => {
            return itemPreview(el);
        });
    }
);

export const getMusicPreview = createSelector(
    albums,
    (state: MusicStore): Preview[] => {
            if (!state.items) { return []; }
            return state.items.slice(0, 4).map((el) => {
                return itemPreview(el);
            });
    }
);

function itemPreview(item: Albums): Preview {
    return { image: `${item.images[1].url}`, title: item.name };
}

function itemDetail(item: Artists ): Artists | undefined {
    if(!item) { return; }
    // const {isbn, description, issueNumber,  pageCount, prices, title, urls ,images:[{path,extension}], dates: [{date:onsaleDate}], creators:{items: creators}}: any = selectedComic;
    // let comic: ComicDetail = {
    //     onsaleDate,
    //     creators: creators.map((c: Items) => {return {name: c.name, role: c.role};}),
    //     description,
    //     image: `${path}.${extension}`,
    //     isbn,
    //     issueNumber,
    //     pageCount,
    //     printPrice: prices.find((c: Price) => c.type === 'printPrice').price,
    //     purchaseUrl: urls.find((c: any) => c.type === 'purchase').url,
    //     title
    // };
    return item;
}




