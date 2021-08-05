import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { isLoaded, getRouteID, getItem, getCategory } from '@web/store/selectors';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<any> {
  constructor(private store: Store<State>) {
  }

  resolve(): Observable<any> {
    return this.store.pipe(select(isLoaded))
    .pipe(
      filter((loaded: any) => {
        return !!loaded;
      }),
      switchMap(() => combineLatest([this.store.pipe(select(getRouteID)), this.store.pipe(select(getCategory))]).pipe(
        filter(([routeId, category]) => {
          return !!routeId && !!category;
        }),
       switchMap(([routeId, category]) => {
        return of(this.store.dispatch(AppActions.getDetail({ routeId, category: category ? category : undefined })));
        }),
       switchMap(() => this.store.pipe(select(getItem))),
      )), filter((item: any ) => {
             return !!item;
           })
      , first());
  }
}

