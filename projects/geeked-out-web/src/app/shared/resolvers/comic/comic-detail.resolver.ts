import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getItem, getRouteID } from '@web/store/selectors';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, first, map, switchMap, take } from 'rxjs/operators';
import { ComicDetail } from '@web/shared/interfaces/comic';


@Injectable({
  providedIn: 'root'
})
export class ComicDetailResolver implements Resolve<ComicDetail> {
  constructor(private store: Store<State>) {
  }

  resolve(): Observable<ComicDetail> {
    return this.store.pipe(select(getRouteID))
      .pipe(
        map((routeId: string) => this.store.dispatch(AppActions.getComicDetail({ routeId }))),
        switchMap(() => this.store.pipe(select(getItem))),
        filter((comic: ComicDetail) => {
          // console.log(comic !== undefined);
          return comic !== undefined;
        }), first());
  }
}
