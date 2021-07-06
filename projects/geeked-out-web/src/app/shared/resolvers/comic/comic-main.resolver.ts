import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { getCategory, getItems, isLoaded } from '@web/store/selectors';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { debounce, filter, first, map, switchMap, takeUntil, takeWhile } from 'rxjs/operators';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Preview } from '@web/shared/interfaces/preview';

@Injectable({
  providedIn: 'root'
})

export class ComicMainResolver implements Resolve<Preview[]> {
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
          return this.store.pipe(select(getItems(category, false, 'results'))).pipe(
            filter((comics: Preview[]): boolean => {
              return !!comics;
            })
          )
        }), first());

  }
}
