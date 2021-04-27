import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@web-env/environment';
import { catchError, map } from 'rxjs/operators';
import { MusicStore } from '@web/shared/interfaces/music';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService extends ResourceService<MusicStore>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endPointUrl = '/music/preview/';
  }

  // getMusic(limit: number): Observable<MusicStore> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.httpClient.get<MusicStore>(`${environment.apiUrl}/music/preview/${limit}`, { headers });
  //     // .pipe(
  //     //   // map((music) => music),
  //     //   // catchError(this.handleError<MusicStore>('getMusic', {} as MusicStore))
  //     // );
  // }


  getMusic(limit?: number): Observable<MusicStore> {
    return this.read(limit);
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
