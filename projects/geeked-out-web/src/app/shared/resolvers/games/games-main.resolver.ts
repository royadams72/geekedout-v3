import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesMainResolver implements Resolve<Preview[]> {
  constructor(private store: Store<State>) {}

  resolve(): Observable<Preview[]> {
    return this.store.pipe(select(getItems(CategoryType.Games, false)))
      .pipe(
        filter((games: Preview[]) => {
          console.log(games !== undefined);
          return games !== undefined;
        }), first());
  }
}
