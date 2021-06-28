import { createSelector } from '@ngrx/store';
import { ComicsMainComponent } from '@web/features/comics/components/comics-main/comics-main.component';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Paths } from '@web/shared/enums/paths.enums';
import { Comic, ComicDetail, Items, Price } from '@web/shared/interfaces/comic';
import { Game, GameDetail } from '@web/shared/interfaces/game';
import { Movie, MovieDetail, MoviesStore } from '@web/shared/interfaces/movies';
import { AlbumDetail, Album, Artists, Tracks } from '@web/shared/interfaces/music';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { AppState } from '../reducers/main.reducers';


const appState = (state: State) => state.state;
let moviesImagePath: string;

export const isLoaded = createSelector(
    appState,
    (state: AppState): boolean => state.uiData.uiLoaded);

export const getRouteID = createSelector(
    appState,
    (state: AppState) => {
        return state.uiData.selectedId;
    }
);

export const getItem = createSelector(
    appState,
    (state: AppState) => state.uiData.selectedItem);

export const getPageLoading = createSelector(
    appState,
    (state: AppState) => state.uiData.pageLoading);

export const getCurrPrevUrls = createSelector(
        appState,
        (state: AppState) => state.uiData.currPrevUrls);

export const getCategoryState = (category: string): any => {
   return createSelector(
            appState,
            (state: any) => {
               return state[`${category}`];
            }
        );

};


export const search = (searchString: string): any => {
    return createSelector(
             appState,
             (state: any) => {
                 const s = searchString.toUpperCase();
                 const keys = [{state: CategoryType.Comics, array: 'results'},
                               {state: CategoryType.Music, array: 'items'},
                               {state: CategoryType.Movies, array: 'results'},
                               {state: CategoryType.Games, array: ''}]

                 return keys.map((key) => {
                 const arr = key.array ? state[key.state][key.array] : state[key.state];
                 return arr.map((item: any) => {
                        item = mapItemForPreview(key.state, item);
                        return item;
                    }).filter((item: any) => {
                        const title = item.title.toUpperCase();
                        return title.includes(s);
                 }); });
             }
         );

 };



export const getItems = (category: string, preview: boolean, arrayName?: string) => {
    return createSelector(
        getCategoryState(category),
        (state: any): Preview[] => {
            if (Object.entries(state).length === 0) { return [] as Preview[]; }
            let arr = !arrayName ? state : state[`${arrayName}`];
            if (preview) { arr = arr.slice(0, 4); }
            getImageDataIfMovies(state);
            return arr.map((el: Array<{}>) => {
                return mapItemForPreview(category, el);
            });
        }
    );
};

function getImageDataIfMovies(state: MoviesStore): string {
    if (!state.imageData) { return ''; }
    return moviesImagePath = `${state.imageData.secure_base_url}`;
}

function mapItemForPreview(category: string, item: any): Preview | undefined {
    let data;
    const isImages = item.images !== undefined ? item.images.length > 0 : undefined;
    const imageNotFound = `${Paths.Images}/image404@2x.png`;
    const imageNotFound450x210 = `${Paths.Images}/image404-450x210@2x.png`;
    const imageNotFound250x250 = `${Paths.Images}/image404-250x250@2x.png`;
    if (category === CategoryType.Comics) {

        data = {
            id: item.id, imageLarge: isImages ? `${item.images[0].path}.jpg` : imageNotFound,
            imageSmall: isImages  ? `${item.images[0].path}/standard_fantastic.jpg` : imageNotFound250x250, title: item.title
        };
    } else if (category === CategoryType.Music) {
        data = {
            id: item.id, imageLarge: isImages ? `${item.images[1].url}` : imageNotFound,
            imageSmall: isImages ? `${item.images[2].url}` : imageNotFound, title: item.name
        };
    } else if (category === CategoryType.Movies) {
        data = {
            id: item.id, imageLarge: item.poster_path ? `${moviesImagePath}w300${item.poster_path}` : imageNotFound,
            imageSmall: item.poster_path ? `${moviesImagePath}w154${item.poster_path}` : imageNotFound, title: item.title
        };
    } else if (category === CategoryType.Games) {
        data = { id: item.id, imageLarge: item.image || imageNotFound450x210, title: item.title };
    }
    return data;
}
