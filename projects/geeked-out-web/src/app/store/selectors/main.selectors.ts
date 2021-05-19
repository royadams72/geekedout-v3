import { createSelector } from '@ngrx/store';
import { ComicsMainComponent } from '@web/features/comics/components/comics-main/comics-main.component';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Comic, ComicDetail, Items, Price } from '@web/shared/interfaces/comic';
import { MoviesResponse } from '@web/shared/interfaces/movies';
import { AlbumDetail, Albums, Tracks } from '@web/shared/interfaces/music';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { AppState } from '../reducers/main.reducers';


const appState = (state: State) => state.state;
let moviesImagePath: string;

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
        let routeID;
        if (typeof state.selectedId === 'number') {
            routeID = +state.selectedId;
        } else {
            routeID = state.selectedId;
        }
        return routeID;
    }
);

export const getSubState = (subState: string): any => {
   return createSelector(
            appState,
            // projection function
            (state: any) => state[`${subState}`]
        );


};

export const getDetail = <T>(subState: string, arrayName: string): any => {
    return createSelector(
        getSubState(subState),
        getRouteID,
        (state: AppState, routeId: string | number): T | undefined => {
            const selectedItem: T | undefined = getSelectedItem(state, arrayName, routeId);

            return selectedItem ? mapDetail(subState, selectedItem) : undefined;
        }
    );
 };

export const getItems = (subState: string, preview: boolean, arrayName?: string) => {
    return createSelector(
        getSubState(subState),
        (state: any): Preview[] => {
            if (!state) { return []; }
            let arr = !arrayName ? state : state[`${arrayName}`];
            if (preview) {  arr = arr.slice(0, 4); }
            getImageDataIfMovies(state);
            return arr.map((el: Array<{}>) => {
                return previewCategory(subState, el);
            });
        }
    );
};

function getSelectedItem<T>(state: AppState, arrayName: string, routeId: string | number): T | undefined {
    return (state as any)[`${arrayName}`].find((item: any): boolean => {
        return item.id === routeId;
    });
}

function getImageDataIfMovies(state: MoviesResponse) {
    if(!state.imageData) { return; }
    moviesImagePath = `${state.imageData.secure_base_url}w300`;
}

function previewCategory(subState: string, item: any): Preview | undefined {
    let data;
    if (subState === CategoryType.Comics) {
         data = { id: item.id, image: `${item.images[0].path}.${item.images[0].extension}`, title: item.title };
    } else if (subState === CategoryType.Music) {
        data = { id: item.id, image: `${item.images[1].url}`, title: item.name };
    } else if (subState === CategoryType.Movies) {
        data = {id: item.id, image: `${moviesImagePath}${item.poster_path}`, title: item.title};
    } else if (subState === CategoryType.Games) {
        data = {id: item.id, image: item.image, title: item.title};
    }
    return data;
}

function mapDetail(subState: string, selectedItem: any | undefined): any | undefined {
    if (!selectedItem) { return; }
    let data;
    // const { isbn, description, issueNumber, pageCount, prices, title, urls, images: [{ path, extension }],
    // dates: [{ date: onsaleDate }], creators: { items: creators } }: any = selectedItem;
    // const purchaseUrl = urls.find((c: any) => c.type === 'purchase');

    if (subState === CategoryType.Comics) {
        data = comicDetail(selectedItem);
    } else if (subState === CategoryType.Music) {
        data = albumDetail(selectedItem);
    }
    return data;
}


function musicDetail(selectedItem: Albums) : any | undefined {
    // return {
    //     name: string;
    //     artists: ArtistDetails[];
    //     release_date: string;

    // };
    return selectedItem;
}

function comicDetail(selectedItem: Comic) : ComicDetail | undefined {
    if (!selectedItem) { return; }
    const { isbn, description, issueNumber, pageCount, prices, title, urls, images: [{ path, extension }],
    dates: [{ date: onsaleDate }], creators: { items: creators } }: any = selectedItem;
    const purchaseUrl = urls.find((c: any) => c.type === 'purchase');
    return {
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
}

function albumDetail(selectedItem: Albums) : AlbumDetail | undefined {
    if (!selectedItem) { return; }
    const { name, artists: artistArray, images: [, {url: image}], external_urls: {spotify: spotify_link} , release_date , tracks: {items}} = selectedItem;
    const tracks = items.map((item: any) => item.name);
    const artists = artistArray.map((item: any) => item.name);
    return {
        name,
        artists,
        spotify_link,
        image,
        release_date,
        tracks
    };
}

