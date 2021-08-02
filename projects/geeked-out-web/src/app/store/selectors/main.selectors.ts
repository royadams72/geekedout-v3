import { createSelector } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Paths } from '@web/shared/enums/paths.enums';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { AppState } from '../reducers/main.reducers';


const appState = (state: State) => state.state;

export const isLoaded = createSelector(
    appState,
    (state: AppState): boolean | undefined => {
    let data;
    if (state.uiData.loadedItems) {
      data = state.uiData.loadedItems.mainData;
    }
    return data;
});

export const isMovieDetailsLoaded = createSelector(
      appState,
      (state: AppState): boolean | undefined => {
        let data;
        if (state.uiData.loadedItems) {
          data = state.uiData.loadedItems.movieDetails;
        }
        return data;
  });


export const isMusicDetailsLoaded = createSelector(
    appState,
    (state: AppState): boolean | undefined => {
      let data;
      if (state.uiData.loadedItems) {
        data = state.uiData.loadedItems.musicDetails;
      }
      return data;
});

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

export const getCategory = createSelector(
    appState,
    (state: AppState): string | undefined => {
        const str = state.uiData.currPrevUrls.currentUrl;
        const begin =  str.indexOf('/') + 1;
        const end = str.lastIndexOf('/');
        const  category = end > 0 ? str.substring(begin, end) : str.substring(begin);
        return category || undefined;
    });

export const isSearch = createSelector(
      appState,
      (state: AppState) => !!(state.uiData.currPrevUrls.previousUrl === '/search' && state.uiData.searchData.searchTerm));

export const getCategoryState = (category: string): any => {

   return createSelector(
            appState,
            (state: any) => {
              return state[`${category}`];
            }
        );
};


export const getSearchState = createSelector(
           appState,
           (state: any) => state.uiData.searchData
       );


export const search = (searchString: string): any => {
    return createSelector(
             appState,
             (state: any) => {
                 if (searchString.length < 3) { return; }
                 const s = searchString.toUpperCase().replace(/\s+/g, '');

                 const keys = [{state: CategoryType.Comics, array: 'results'},
                               {state: CategoryType.Music, array: 'items'},
                               {state: CategoryType.Movies, array: 'results'},
                               {state: CategoryType.Games, array: ''}];
                 return keys.map((key) => {
                 const arr = key.array ? state[key.state][key.array] : state[key.state];
                 return arr.map((item: any) => {
                        item = mapItemForPreview(key.state, item);
                        return item;
                    }).filter((item: any) => {
                        const title = item.title.toUpperCase().replace(/\s+/g, '');
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
            // getImageDataIfMovies(state);

            return arr.map((el: Array<{}>) => {
                return mapItemForPreview(category, el);
            });
        }
    );
};

/** Helpers */
/** TODO: get rid of image data */

// function getImageDataIfMovies(state: MoviesStore): string {
//     if (!state.imageData) { return ''; }
//     return moviesImagePath = `${state.imageData.secure_base_url}`;
// }

function mapItemForPreview(category: string, item: any): Preview | undefined {
    let data;
    const isImages = item.images !== undefined ? item.images.length > 0 : undefined;

    const imageNotFound = `${Paths.Images}/image404@2x.png`;
    const imageNotFound450x210 = `${Paths.Images}/image404-450x210@2x.png`;
    const imageNotFound250x250 = `${Paths.Images}/image404-250x250@2x.png`;

    if (category === CategoryType.Comics) {
        data = {
          category: CategoryType.Comics, id: item.id, imageLarge: isImages ? `${item.images[0].path}.jpg` : imageNotFound,
          imageSmall: isImages  ? `${item.images[0].path}/standard_fantastic.jpg` : imageNotFound250x250, title: item.title
        };
    } else if (category === CategoryType.Music) {
        data = {
            category: CategoryType.Music, id: item.id, imageLarge: isImages ? `${item.images[1].url}` : imageNotFound,
            imageSmall: isImages ? `${item.images[2].url}` : imageNotFound, title: item.name
        };
    } else if (category === CategoryType.Movies) {
        data = {
          category: CategoryType.Movies, id: item.id,
          imageLarge: item.poster_path ? `${Paths.MoviesCdnImages}w300${item.poster_path}` : imageNotFound,
          imageSmall: item.poster_path ? `${Paths.MoviesCdnImages}w154${item.poster_path}` : imageNotFound, title: item.title
        };
    } else if (category === CategoryType.Games) {
        data = { category: CategoryType.Games, id: item.id, imageLarge: item.image || imageNotFound450x210, title: item.title };
    }

    return data;
}
