import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getItem, getRouteID, isLoaded } from '@web/store/selectors';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import { filter, first, map, retry, switchMap, take, takeWhile } from 'rxjs/operators';
import { ComicDetail } from '@web/shared/interfaces/comic';


@Injectable({
  providedIn: 'root'
})
export class ComicDetailResolver implements Resolve<ComicDetail> {
  constructor(private store: Store<State>) {
  }

  resolve(): Observable<ComicDetail> {
    return this.store.pipe(select(isLoaded))
       .pipe(
         filter((loaded: boolean) => {
           return !!loaded;
         }),
         switchMap(() => this.store.pipe(select(getRouteID)).pipe(
          map((routeId: string) => this.store.dispatch(AppActions.getComicDetail({ routeId }))),
          switchMap(() => this.store.pipe(select(getItem))),
         )), filter((comic: ComicDetail) => {
                console.log(comic, !!comic);
                return !!comic;
              })
         , first());
   }
}
