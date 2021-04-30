import { Injectable } from '@angular/core';
import { createSelector } from '@ngrx/store';
import { Albums, Artist, MusicStore } from '@web/shared/interfaces/music';
// import { Comic, ComicDetail, ComicStore, ImageModel, Items, Obj, Price } from '@web/shared/interfaces/comic';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { AppState } from '@web/store//reducers/main.reducers';

@Injectable({
    providedIn: 'root'
})

export class SelectorService {
    selectors: any = {};
    appState = (state: any) => state.state;

    getRouteID = createSelector(
        this.appState,
        (state: AppState): string => {
            return state.selectedId;
        }
    );
    // setSelectors(subState: any) {
    //     this.selectors = {
    //         [`${subState}`]: createSelector(
    //             this.appState,
    //             (state: any) => state[`${subState}`]
    //         ),
    //         getDetail: createSelector(
    //             this.selectors[`${subState}`],
    //             this.getRouteID,
    //             (state: any, routeId: string): any | undefined => {
    //                 const item: any = state.items.find((item: any): boolean => {
    //                     return item.id === routeId;
    //                 })!;
    //                 return this.itemDetail(item);
    //             }
    //         )
    //     }
    // }

    getSubState<T>(subState: string) {
        this.selectors = {
            [`${subState}`]: createSelector(
                this.appState,
                (state: any) => state[`${subState}`]
            )

        };
    }






    // export const getDetail = createSelector(
    //         albums,
    //         getRouteID,
    //         (state: MusicStore, routeId: string): Artist | undefined =>  {
    //         const item: Artist = state.items.find((artist: Artist ): boolean => {
    //             return artist.id === routeId;
    //         })!;
    //         return itemDetail(item);
    //     }
    // );

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

    // export const getAllAlbums = createSelector(
    //     albums,
    //     (state: MusicStore): Preview[] => {
    //         if (!state.items) { return []; }
    //         return state.items.map((el) => {
    //             return itemPreview(el);
    //         });
    //     }
    // );

    // export const getMusicPreview = createSelector(
    //     albums,
    //     (state: MusicStore): Preview[] => {
    //             if (!state.items) { return []; }
    //             return state.items.slice(0, 4).map((el) => {
    //                 return itemPreview(el);
    //             });
    //     }
    // );

    // function itemPreview(item: Albums) {
    //     return { image: `${item.images[1].url}`, title: item.name };
    // }

    itemDetail(item: Artist): Artist | undefined {
        if (!item) { return; }
        // const {isbn, description, issueNumber,  pageCount, prices, title, urls ,images:[{path,extension}], dates: [{dat
        // e:onsaleDate}], creators:{items: creators}}: any = selectedComic;
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



}
