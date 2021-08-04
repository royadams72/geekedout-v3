import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { environment } from '@web-env/environment';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { MoviesStore, MoviesImageData, Movie } from '@web/shared/interfaces/movies';
import { ResourceService } from './resource.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService extends ResourceService<MoviesStore> {

  slash = environment.production ? '' : '/';
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endPointUrl = {  preview: `${this.slash}movies/preview/`, info: `${this.slash}movies/info`, details: `${this.slash}movies/details/` };
   }

  getMovies(): Observable<MoviesStore> {
    console.log('movies');
    return this.httpClient.get<MoviesStore>(`${environment.apiUrl}${this.endPointUrl.preview}`, this.httpOptions);
  }

  getDetailsForMovies(): Observable<any> {
    const httpArray: Array<Observable<any>> = [];
    let moviesStore = {} as MoviesStore;
    return this.httpClient.get<MoviesStore>(`${environment.apiUrl}${this.endPointUrl.preview}`, this.httpOptions)
     .pipe(
       map((data) => {
         moviesStore = data;
         data.results.map((item: Movie) => {
           httpArray.push(this.httpClient.get<any>(`${environment.apiUrl}${this.endPointUrl.details}${item.id}`, this.httpOptions));
         });
     }),
     switchMap(() => {
       return forkJoin([...httpArray]);
     }),
     map((items: any) => {
       moviesStore.results = items;
       console.log(moviesStore);
       return moviesStore;
     }));
  }
}
