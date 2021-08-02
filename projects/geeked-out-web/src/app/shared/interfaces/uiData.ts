import { Preview } from './preview';

export interface UiData {
   selectedId: string;
   selectedItem: any;
   pageLoading: boolean;
   loadedItems: {
      mainData: boolean;
      musicDetails: boolean;
      movieDetails: boolean;
   };
   currPrevUrls: {
      currentUrl: string;
      previousUrl: string;
   };
   searchData: {
    searchTerm: string;
    items: Array<Preview>
   };
}
