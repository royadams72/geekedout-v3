import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ComicDetail } from '@web/shared/interfaces/comic';
import { GameDetail } from '@web/shared/interfaces/game';
import { MovieDetail } from '@web/shared/interfaces/movies';
import { AlbumDetail } from '@web/shared/interfaces/music';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { isLoaded, getRouteID, getItem } from '@web/store/selectors';
import { Observable, of } from 'rxjs';
import { filter, switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<ComicDetail | AlbumDetail | GameDetail| MovieDetail> {
  constructor(private store: Store<State>) {
  }
  resolve(): Observable<ComicDetail | AlbumDetail | GameDetail| MovieDetail> {
    return this.store.pipe(select(isLoaded))
    .pipe(
      filter((loaded: boolean) => {
        return !!loaded;
      }),
      switchMap(() => this.store.pipe(select(getRouteID)).pipe(
       map((routeId: string) => this.store.dispatch(AppActions.getComicDetail({ routeId }))),
       switchMap(() => this.store.pipe(select(getItem))),
      )), filter((item: ComicDetail | AlbumDetail | GameDetail| MovieDetail ) => {
             console.log(item, !!item);
             return !!item;
           })
      , first());
  }
}

