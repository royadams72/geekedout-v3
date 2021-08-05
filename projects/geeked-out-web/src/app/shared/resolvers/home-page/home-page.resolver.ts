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
         let categoriesLoaded = 0;
          for (const [item, isLoaded] of Object.entries(itemsLoaded)) {
              if(item !== 'appInit') {
                isLoaded ? categoriesLoaded++ : categoriesLoaded;
              }
          }
          // Load page after two categories are ready
          return categoriesLoaded >= 2;
        }), first());
  }
}

