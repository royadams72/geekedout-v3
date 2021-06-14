import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {  first, map, switchMap } from 'rxjs/operators';
import { Store, createFeatureSelector, select, Action, createSelector } from '@ngrx/store';
import { ROUTER_NAVIGATED, RouterNavigationAction, ROUTER_REQUEST, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { AppActions } from '../actions';
import { RouterStateUrl, State } from '../reducers';
import { combineLatest, forkJoin, of } from 'rxjs';
import { getCurrPrevUrls } from '../selectors';
// import { AppState } from '../reducers/main.reducers';

export const getRouterState = createFeatureSelector<RouterStateUrl>('router');


export const  get = (old: any): any => {
 return createSelector(
    getRouterState,
    (state: any) => {
      if(!state) { return; }
      // console.log({url: state.state.url, prev: old});
    return {url: state.state.url, prev: old};
    })
}
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
  old: any;
  new: any;
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
      let [{ previousUrl:newPreviousUrl,  currentUrl: newCurrentsUrl }, { previousUrl:oldPreviousUrl }] = urlArr;
      let currentAndPreviousUrls = { currentUrl: newCurrentsUrl, previousUrl: newPreviousUrl};
      //  need to rehydrate previousUrl in store on page refresh
      if(newPreviousUrl === '' && oldPreviousUrl) {
        currentAndPreviousUrls.previousUrl = oldPreviousUrl;
      }

      return AppActions.setCurrPrevUrls(currentAndPreviousUrls);
    }),
  ), { dispatch: true });

  setPageLoadingTrue$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_REQUEST),
    switchMap(action => {
      return of(true);
    }),
    map((state) => {
      return AppActions.setPageLoading({ pageLoading: true });
    }),
  ), { dispatch: true });


  setPageLoadingFalse$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_NAVIGATED),
    switchMap(action => {
      return of(false);
    }),
    map((pageLoading) => {
      return AppActions.setPageLoading({ pageLoading});
    }),
  ), { dispatch: true });



  private getId(routerState: any): string {
    return routerState.params.id;
  }
  constructor(
    private actions$: Actions,
    private store: Store<State>) { }
}
