import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppState, reducer as AppReducer } from './main.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterReducerState, RouterStateSerializer, routerReducer } from '@ngrx/router-store';


export interface State {
  state: AppState;
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  state: AppReducer,
  router: routerReducer
};

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}
// Custom serializer to get router snapshot
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}
export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({ keys: ['state'], rehydrate: true, storage: sessionStorage })(reducer);
}
export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
