import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { environment } from '@web-env/environment';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Albums, MusicStore } from '@web/shared/interfaces/music';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService extends ResourceService<MusicStore>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endPointUrl = '/music/preview/';
  }

  getMusic2(limit?: number): Observable<MusicStore> {
    let httpArray: Array<Observable<any>> = [];
    let musicStore = {} as MusicStore;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<MusicStore>(`${environment.apiUrl}${this.endPointUrl}${limit}`, this.httpOptions)
      .pipe(
        map((data) => {
          musicStore = data;
          data.items.map((item: Albums) => {
            httpArray.push(this.httpClient.get<any>(`${environment.apiUrl}/music/getAlbum/${item.id}`, this.httpOptions));
          });

        }),
        mergeMap(() => {
          return forkJoin(httpArray);

        }),
        map((albumsArray: Albums[]) => {

          musicStore.items = albumsArray;
          console.log(musicStore);
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
