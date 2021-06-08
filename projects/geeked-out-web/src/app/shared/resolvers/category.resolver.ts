import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getDetail, getItems, getRouteID } from '@web/store/selectors';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, first, map, take } from 'rxjs/operators';
import { CategoryType } from '../enums/category-type.enum';
import { ComicDetail } from '../interfaces/comic';
import { Preview } from '../interfaces/preview';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<any> {
  store$ = new Observable<any>() ;
  constructor(private store: Store<State>) {

  }
  routeId: any;
  // resolve(): Observable<any> {
  //   let routeId: string;
  //   this.store.pipe(select(getRouteID)).subscribe((id) => routeId = id);
  //   console.log()
  //  return of(this.store.dispatch(AppActions.getCategoryDetail({category: CategoryType.Comics, routeId}))).pipe(
  //     filter((data: any) => {
  //     console.log(data);
  //     return data === data;
  //   }), first())


  //   // return this.store.pipe(select(getDetail<ComicDetail>(CategoryType.Comics, 'results')),
  //   //   filter((data: any) => {
  //   //     console.log(data);
  //   //     return data === data;
  //   //   }), first())
  // }

  // resolve(): Observable<Preview[]> {
  //   return  this.store.pipe(select(getDetail<ComicDetail>(CategoryType.Comics, 'results')),
  //     filter((data: Preview[]) => {
  //       console.log(data);
  //       return data === data;
  //     }), first())
  // }

  resolve(): Observable<any> {
    this.store.pipe(select(getRouteID)).subscribe(data => this.routeId = data)
    return this.store.pipe(select(getRouteID))
      .pipe(
        map((routeId: any) => {
          console.log(routeId);
          return this.store.dispatch(AppActions.getCategoryDetail({ category: CategoryType.Comics, routeId, array: 'results' }));
        }), filter((data: any) => {
          console.log(data);
          return data === data;
        }), first());
  }
}
