import { Preview } from './preview';

export interface UiData {
   selectedId: string;
   selectedItem: any;
   uiLoaded: boolean;
   pageLoading: boolean;
   currPrevUrls: {
      currentUrl: string;
      previousUrl: string;
   };
   searchData: {
    searchTerm: string;
    items: Array<Preview>
   };
}
