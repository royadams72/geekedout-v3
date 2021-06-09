import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MovieDetail } from '@web/shared/interfaces/movies';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getRouteID, getItem } from '@web/store/selectors';
import { Observable} from 'rxjs';
import { map, switchMap, filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesDetailResolver implements Resolve<MovieDetail> {
  constructor(private store: Store<State>) {
  }

  resolve(): Observable<MovieDetail> {
    return this.store.pipe(select(getRouteID))
      .pipe(
        map((routeId: string) => this.store.dispatch(AppActions.getMovieDetail({ routeId }))),
        switchMap(() => this.store.pipe(select(getItem))),
        filter((game: MovieDetail) => {
          console.log(game !== undefined);
          return game !== undefined;
        }), first());
  }
}
