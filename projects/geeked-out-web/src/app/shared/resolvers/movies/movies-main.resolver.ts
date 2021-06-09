import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors';
import { Observable, of } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesMainResolver implements Resolve<Preview[]> {
  constructor(private store: Store<State>) {}

  resolve(): Observable<Preview[]> {
    return this.store.pipe(select(getItems(CategoryType.Movies, false, 'results')))
      .pipe(
        filter((movies: Preview[]) => {
          console.log(movies !== undefined);
          return movies !== undefined;
        }), first());
  }
}
