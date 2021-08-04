import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { environment } from '@web-env/environment';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Album, MusicStore } from '@web/shared/interfaces/music';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService extends ResourceService<MusicStore>{
  slash = environment.production ? '' : '/';
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endPointUrl = {preview: `${this.slash}music/preview/`, details: `${this.slash}music/getAlbum/`};
  }

  getMusic(limit?: number): Observable<MusicStore> {
    const httpArray: Array<Observable<any>> = [];
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<MusicStore>(`${environment.apiUrl}${this.endPointUrl.preview}${limit}`, this.httpOptions);
  }

  getMusicDetails(limit?: number): Observable<MusicStore> {
    const httpArray: Array<Observable<any>> = [];
    let musicStore = {} as MusicStore;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<MusicStore>(`${environment.apiUrl}${this.endPointUrl.preview}${limit}`, this.httpOptions)
      .pipe(
        map((data) => {
          musicStore = data;
          data.items.map((item: Album) => {
            httpArray.push(this.httpClient.get<any>(`${environment.apiUrl}${this.endPointUrl.details}${item.id}`, this.httpOptions));
          });
        }),
        switchMap(() => {
          return forkJoin(httpArray);
        }),
        map((albumsArray: Album[]) => {
          musicStore.items = albumsArray;
          return musicStore;
        })

      );

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
