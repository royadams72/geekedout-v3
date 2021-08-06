import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { environment } from '@web-env/environment';
import { catchError, first, map, mergeMap, switchMap } from 'rxjs/operators';
import { Album, AlbumDetail, MusicStore } from '@web/shared/interfaces/music';
import { ResourceService } from './resource.service';
import { select, Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors';
import { CategoryType } from '../enums/category-type.enum';
import { Preview } from '../interfaces/preview';

@Injectable({
  providedIn: 'root'
})
export class MusicService extends ResourceService<MusicStore>{
  slash = environment.production ? '' : '/';
  constructor(httpClient: HttpClient, private store: Store<State>) {
    super(httpClient);
    this.endPointUrl = {preview: `${this.slash}music/preview/`, details: `${this.slash}music/getAlbum/`};
  }

  getMusic(limit?: number): Observable<MusicStore> {
    return this.httpClient.get<MusicStore>(`${environment.apiUrl}${this.endPointUrl.preview}${limit}`, this.httpOptions);
  }


  getMusicDetails(limit?: number): Observable<AlbumDetail[]> {
    const httpArray: Array<Observable<AlbumDetail>> = [];
    return this.store.pipe(select(getItems(CategoryType.Music, false, 'items')))
      .pipe(
        map((data) => {
          data.map((item: Preview) => {
            httpArray.push(this.httpClient.get<any>(`${environment.apiUrl}${this.endPointUrl.details}${item.id}`, this.httpOptions));
          });
        }),
        switchMap(() => {
          return forkJoin(httpArray);
        }),
        map((musicDetails: AlbumDetail[]) => {
          return musicDetails;
        }), first());
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  //  handleError<T>(operation = 'operation', result?: T): any {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
