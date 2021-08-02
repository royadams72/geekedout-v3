import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { getCategory, getItems, isLoaded, isMusicDetailsLoaded } from '@web/store/selectors';
import { Observable, of} from 'rxjs';
import { filter, first, sequenceEqual, switchMap } from 'rxjs/operators';
import { Preview } from '@web/shared/interfaces/preview';
import { CategoryArrays } from '@web/shared/enums/arrays.enums';
import { AppActions } from '@web/store/actions';

@Injectable({
  providedIn: 'root'
})

export class MusicResolver implements Resolve<boolean | undefined> {
  constructor(private store: Store<State>, private router: Router) { }

  resolve(): Observable<boolean | undefined> {
    let cat = '';
    return this.store.pipe(select(isLoaded))
      .pipe(
        filter((loaded: boolean | undefined): boolean => {
          return !!loaded;
        }),
        //  switchMap get category
        switchMap(() => this.store.pipe(select(getCategory)).pipe(
          filter((category: any): boolean => {
            cat = category;
            return !!category;
          })
        )),
        switchMap((category: string) => {
          const arrayNames: any =
          {comics: CategoryArrays.MoviesComics, movies: CategoryArrays.MoviesComics, music: CategoryArrays.Music, games: ''};
          const array = arrayNames[`${category}`];
          return this.store.pipe(select(getItems(category, false, array))).pipe(
            filter((items: Preview[]): boolean => {
              return !!items;
            })
          );
        }),
        switchMap(() => of(this.store.dispatch(AppActions.loadMusicDetails()))),
        switchMap(() => this.store.pipe(select(isMusicDetailsLoaded)).pipe(
          filter((isMusicLoaded: any)  => {
            return isMusicLoaded;
          })
        )
        ), first());

  }


}
