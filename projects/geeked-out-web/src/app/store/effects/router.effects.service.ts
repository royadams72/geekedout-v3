import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, tap, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Store, createFeatureSelector, select, Action } from '@ngrx/store';
import { ROUTER_NAVIGATED, RouterReducerState } from '@ngrx/router-store';
import { AppActions } from '../actions/';
import * as fromRouter from '@ngrx/router-store';

export const getRouterState = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(getRouterState);

@Injectable({
  providedIn: 'root'
})

export class RouterEffects {

  // setCurrentCourse = createEffect(() => this.actions$.pipe(
  //   ofType(ROUTER_NAVIGATED),
  //   switchMap(() => this.store.select(selectRouteParam('id') as any)),
  //   map((id: any) => setIds({ id })),
  // ), { dispatch: true });
  setCurrentCourse = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    switchMap((e) => {
      console.log(e);
      return this.store.select(selectRouteParam('id') as any);
    }),
    map((id: any) => {
      console.log('id= ', id);
      return AppActions.setIds({ id });
    }),
  ), { dispatch: true });

  constructor(
    private actions$: Actions,
    private store: Store) { }
}
