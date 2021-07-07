import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { getCategory, getItems, isLoaded } from '@web/store/selectors';
import { Observable} from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';
import { Preview } from '@web/shared/interfaces/preview';
import { CategoryArrays } from '@web/shared/enums/arrays.enums';

@Injectable({
  providedIn: 'root'
})

export class MainResolver implements Resolve<Preview[]> {
  constructor(private store: Store<State>, private router: Router) { }

  resolve(): Observable<Preview[]> {
    return this.store.pipe(select(isLoaded))
      .pipe(
        filter((loaded: boolean) => {
          return !!loaded;
        }),
        //  switchMap get category
        switchMap(() => this.store.pipe(select(getCategory)).pipe(
          filter((category: any): boolean => {
            return !!category;
          })
        )),
        switchMap((category: string) => {
          const arrayNames: any =
          {comics: CategoryArrays.MoviesComics, movies: CategoryArrays.MoviesComics, music: CategoryArrays.Music, games: ''};
          const array = arrayNames[`${category}`];
          return this.store.pipe(select(getItems(category, false, array))).pipe(
            filter((item: Preview[]): boolean => {
              return !!item;
            })
          );
        }), first());

  }
}
