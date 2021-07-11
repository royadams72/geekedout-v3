import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { isLoaded } from '@web/store/selectors';
import { filter, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomePageResolver implements Resolve<boolean> {
  constructor(private store: Store<State>) {}
  resolve(): Observable<boolean> {
   return this.store.pipe(select(isLoaded))
      .pipe(
        filter((loaded: boolean) => {
          return !!loaded;
        }), first());
  }
}

