import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { isLoaded } from '@web/store/selectors';
import { filter, first, map, retry } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

   // .subscribe(data => {
    //   console.log(data);
    //   loaded = !!data ? false : true;
    //   if (!loaded) {
    //     // this.router.navigate(['/heroes', { id: heroId }]);
    //   }
    // });
    // return loaded;
    //  const val = loaded ? !!loaded : throwError('Error!');

export class HomePageResolver implements Resolve<any | any> {
  constructor(private store: Store<State>) {}
  resolve(): Observable<any> {
   return this.store.pipe(select(isLoaded))
      .pipe(
        filter((loaded: boolean) => {
          return !!loaded;
        }), first());
  }

  // resolve(): any {
  //   this.store.pipe(select(isLoaded))
  //     .pipe(
  //       map((d) => {
  //         let val = null;
  //         if (!d) {
  //         val = throwError(of(null));
  //         } else {
  //           val = !!d;
  //         }
  //         console.log(val);
  //         return val;

  //       }),
  //       retry(3))
  //     .subscribe(data => {
  //       console.log(data);
  //       const loaded = !!data ? false : true;
  //       return of(loaded);
  //     });

  // }
}

