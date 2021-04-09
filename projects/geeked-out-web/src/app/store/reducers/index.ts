import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppState, reducer as AppReducer } from './main.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';


export interface State {
  state: AppState;
}

export const reducers: ActionReducerMap<State> = {
  state: AppReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({ keys: ['state'], rehydrate: true, storage: sessionStorage })(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
