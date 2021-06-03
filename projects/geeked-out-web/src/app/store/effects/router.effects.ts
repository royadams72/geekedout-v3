import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {  map, switchMap } from 'rxjs/operators';
import { Store, createFeatureSelector, select, Action } from '@ngrx/store';
import { ROUTER_NAVIGATED, RouterNavigationAction } from '@ngrx/router-store';
import { AppActions } from '../actions';
import { RouterStateUrl } from '../reducers';
import { of } from 'rxjs';

export const getRouterState = createFeatureSelector<RouterStateUrl>('router');

@Injectable({
  providedIn: 'root'
})

export class RouterEffects {

  setCurrentCourse$ = createEffect(() => this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_NAVIGATED),
    switchMap(action => {
      return of(this.getId(action.payload.routerState));
    }),
    map((id: any) => {
      return AppActions.setIds({ id });
    }),
  ), { dispatch: true });

  private getId(routerState: any): string {
    return routerState.params.id;
  }
  constructor(
    private actions$: Actions,
    private store: Store) { }
}
