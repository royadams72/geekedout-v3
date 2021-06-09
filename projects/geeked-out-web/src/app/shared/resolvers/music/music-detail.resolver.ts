import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AlbumDetail } from '@web/shared/interfaces/music';

import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getRouteID, getItem } from '@web/store/selectors';
import { Observable, of } from 'rxjs';
import { map, switchMap, filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicDetailResolver implements Resolve<AlbumDetail> {
  constructor(private store: Store<State>) {
  }

  resolve(): Observable<AlbumDetail> {
    return this.store.pipe(select(getRouteID))
      .pipe(
        map((routeId: string) => this.store.dispatch(AppActions.getAlbumDetail({ routeId }))),
        switchMap(() => this.store.pipe(select(getItem))),
        filter((album: AlbumDetail) => {
          console.log(album !== undefined);
          return album !== undefined;
        }), first());
  }
}
