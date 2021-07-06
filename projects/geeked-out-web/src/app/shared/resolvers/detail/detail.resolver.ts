import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ComicDetail } from '@web/shared/interfaces/comic';
import { GameDetail } from '@web/shared/interfaces/game';
import { MovieDetail } from '@web/shared/interfaces/movies';
import { AlbumDetail } from '@web/shared/interfaces/music';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { isLoaded, getRouteID, getItem, getCategory } from '@web/store/selectors';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { filter, switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<any> {
  constructor(private store: Store<State>) {
  }

  resolve(): Observable<any> {
    return this.store.pipe(select(isLoaded))
    .pipe(
      filter((loaded: boolean) => {
        // console.log(!!loaded);
        return !!loaded;
      }),
      switchMap(() => combineLatest([this.store.pipe(select(getRouteID)), this.store.pipe(select(getCategory))]).pipe(
        filter(([routeId, category]) => {
          // console.log('BOTH= ', !!routeId && !!category, 'routeId = ', routeId, 'category= ', category);
          return !!routeId && !!category;
        }),
       switchMap(([routeId, category]) => {
        // console.log(category);
        return of(this.store.dispatch(AppActions.getDetail({ routeId, category: category ? category : undefined })));
        }),
       switchMap(() => this.store.pipe(select(getItem))),
      )), filter((item: any ) => {
            //  console.log(item, !!item);
             return !!item;
           })
      , first());
  }
}

