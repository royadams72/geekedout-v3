import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors';
import { Observable, of } from 'rxjs';
import { filter, first} from 'rxjs/operators';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Preview } from '@web/shared/interfaces/preview';

@Injectable({
  providedIn: 'root'
})

export class ComicMainResolver implements Resolve<Preview[]> {

  constructor(private store: Store<State>) {}

  resolve(): Observable<Preview[]> {
    return this.store.pipe(select(getItems(CategoryType.Comics, false, 'results')))
      .pipe(
        filter((comics: Preview[]) => {
          // console.log(comics !== undefined);
          return comics !== undefined;
        }), first());
  }
}




