import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {  first, map, switchMap } from 'rxjs/operators';
import { Store, createFeatureSelector, select, Action, createSelector } from '@ngrx/store';
import { ROUTER_NAVIGATED, RouterNavigationAction, ROUTER_REQUEST, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { AppActions } from '../actions';
import { RouterStateUrl, State } from '../reducers';
import { forkJoin, of } from 'rxjs';
import { getCurrPrevUrls } from '../selectors';

export const getRouterState = createFeatureSelector<RouterStateUrl>('router');

export const get = (old: any): any => {
  return createSelector(
    getRouterState,
    (state: any) => {
      if (!state) { return; }
      // console.log({url: state.state.url, prev: old});
      return { url: state.state.url, prev: old };
    });
};

// const getUrlFromRoute = createSelector(
//   getRouterState,
//   (state: any) => {
//     if(!state) { return; }
//     console.log(state.state.url);
//   return state.state.url;
//   });
@Injectable({
  providedIn: 'root'
})

export class RouterEffects {

  setRouteId$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
    switchMap(action => {

      return of(this.getId(action.payload.routerState));
    }),
    map((id: any) => {
      return AppActions.setIds({ id });
    }),
  ), { dispatch: true });


  setCurrentAndPreviousUrls$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_REQUEST),
    switchMap(action => {
      const previousUrl = action.payload.routerState.url;
      const currentUrl = action.payload.event.url;
      return forkJoin([of({ currentUrl, previousUrl }), this.store.pipe(select(getCurrPrevUrls), first())]);
    }),
    map((urlArr) => {
      const [{ previousUrl: newPreviousUrl,  currentUrl: newCurrentsUrl }] = urlArr;
      const currentAndPreviousUrls = { currentUrl: newCurrentsUrl, previousUrl: newPreviousUrl};
      //  need to rehydrate previousUrl in store on page refresh
      if (newPreviousUrl === '' && urlArr[1] &&  urlArr[1].previousUrl) {
        currentAndPreviousUrls.previousUrl = urlArr[1].previousUrl;
      }

      return AppActions.setCurrPrevUrls(currentAndPreviousUrls);
    }),
  ), { dispatch: true });

  setPageLoading$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_REQUEST, ROUTER_NAVIGATED),
    switchMap((action: Action) => {
      // Returns true if request is ROUTER_REQUEST false if ROUTER_NAVIGATED
      const requestType = action.type.indexOf('request') !== -1;
      return of(requestType);
    }),
    map((requestType) => {
      return AppActions.setPageLoading({ pageLoading: requestType });
    }),
  ), { dispatch: true });

  private getId(routerState: any): string {
    return routerState.params.id;
  }
  constructor(
    private actions$: Actions,
    private store: Store<State>) { }
}
