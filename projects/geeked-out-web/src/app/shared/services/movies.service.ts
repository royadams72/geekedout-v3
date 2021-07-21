import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { environment } from '@web-env/environment';
import { map, mergeMap } from 'rxjs/operators';
import { MoviesStore, MoviesImageData, Movie } from '@web/shared/interfaces/movies';
import { ResourceService } from './resource.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService extends ResourceService<MoviesStore>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endPointUrl = {  preview: '/music/preview/', info: '/movies/info', details: '/movies/details/' };
   }

  getMovies(): Observable<MoviesStore> {
    const httpArray: Array<Observable<any>> = [];
    let moviesStore = {} as MoviesStore;

    return this.httpClient.get<MoviesStore>(`${environment.apiUrl}/movies/preview`, this.httpOptions)
    .pipe(
      map((data) => {
        moviesStore = data;
        data.results.map((item: Movie) => {
          httpArray.push(this.httpClient.get<any>(`${environment.apiUrl}${this.endPointUrl.details}${item.id}`, this.httpOptions));

        });
    }),
    mergeMap(() => {
      // tslint:disable-next-line: max-line-length
      return forkJoin([this.httpClient.get<MoviesImageData>(`${environment.apiUrl}${this.endPointUrl.info}`, this.httpOptions), ...httpArray]);
    }),
    map((arr: any) => {
      const [imageData, ...rest] = arr;
      moviesStore.imageData = imageData;
      moviesStore.results = rest;
      console.log(moviesStore);
      return moviesStore;
    })

    );
  }
  // getMovies(): Observable<MoviesStore> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.get<MoviesImageData>(`${environment.apiUrl}/movies/info`, { headers })
  //     .pipe(mergeMap((data) => {
  //       return this.getMoviesInfo(data);
  //     }));
  // }

  //  getMoviesInfo(imageData: any): Observable<MoviesStore> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.get<MoviesStore>(`${environment.apiUrl}/movies/preview`, { headers })
  //   .pipe(
  //     map((data) => {
  //       return {...data, imageData};
  //   }));
  // }
}
