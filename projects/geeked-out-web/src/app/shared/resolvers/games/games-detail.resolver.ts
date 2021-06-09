import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { GameDetail } from '@web/shared/interfaces/game';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getRouteID, getItem } from '@web/store/selectors';
import { Observable, of } from 'rxjs';
import { map, switchMap, filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesDetailResolver implements Resolve<GameDetail> {
  constructor(private store: Store<State>) {
  }

  resolve(): Observable<GameDetail> {
    return this.store.pipe(select(getRouteID))
      .pipe(
        map((routeId: string) => this.store.dispatch(AppActions.getGameDetail({ routeId }))),
        switchMap(() => this.store.pipe(select(getItem))),
        filter((game: GameDetail) => {
          console.log(game !== undefined);
          return game !== undefined;
        }), first());
  }
}
