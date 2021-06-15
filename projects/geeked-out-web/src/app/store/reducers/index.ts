import { ActionReducer, ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { AppState, reducer as AppReducer } from './main.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterReducerState, RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { AppActions } from '../actions';
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

export function clearState(reducer: any) {
  return function (state: State | undefined, action: Action) {
    if (action.type === AppActions.clearStore.type) {
      sessionStorage.clear();
      state = {} as State;
    }
    return reducer(state, action);
  };
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({ keys: ['state'], rehydrate: true, storage: sessionStorage })(reducer);
}
export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer, clearState];