import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { isLoaded } from '@web/store/selectors';
import { filter, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadedItems } from '@web/shared/interfaces/uiData';

@Injectable({
  providedIn: 'root'
})

export class HomePageResolver implements Resolve<boolean> {
  constructor(private store: Store<State>) {}
  resolve(): Observable<boolean> {
   return this.store.pipe(select(isLoaded))
      .pipe(
        filter((itemsLoaded: any)  => {
          // KEEP: may have to revist this --fix-loading-issues
          // let categoriesLoaded = 0;
          // for (const [item, loaded] of Object.entries(itemsLoaded)) {
          //     console.log(item, loaded);
          //     if (item !== 'appInit') {
          //       loaded ? categoriesLoaded++ : categoriesLoaded = categoriesLoaded;
          //       console.log(categoriesLoaded);
          //     }
          // }
          // Load page after two categories are ready
          // return categoriesLoaded >= 2;

          return itemsLoaded.appInit;
        }), first());
  }
}

