import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<boolean> {
  constructor(private store: Store<State>) {

  }
  resolve(): Observable<boolean> {
    console.log('resolver');
    return of(true);
  }
}
