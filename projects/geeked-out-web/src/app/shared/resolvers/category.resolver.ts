import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { getDetail, getItems, getRouteID } from '@web/store/selectors';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, first, take } from 'rxjs/operators';
import { CategoryType } from '../enums/category-type.enum';
import { ComicDetail } from '../interfaces/comic';
import { Preview } from '../interfaces/preview';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Preview[]> {
  store$ = new Observable<Preview[]>() ;
  constructor(private store: Store<State>) {

  }
  resolve(): Observable<Preview[]> {
    return  this.store.pipe(select(getDetail<ComicDetail>(CategoryType.Comics, 'results')),
      filter((data: Preview[]) => {
        console.log(data);
        return data === data;
      }), first())
  }

  // resolve(): Observable<Preview[]> {
  //  return combineLatest([
  //     this.store.pipe(select(getItems(CategoryType.Comics, false, 'results'))),
  //     this.store.pipe(select(getDetail<ComicDetail>(CategoryType.Comics, 'results')))
  //   ]).pipe(filter((data: Preview[]) => {
  //     console.log(data);
  //     return data === data;
  //   }), first());
  // }
}
