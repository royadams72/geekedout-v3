import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { environment } from '@web-env/environment';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { MoviesStore, MoviesImageData, Movie, MovieDetail } from '@web/shared/interfaces/movies';
import { ResourceService } from './resource.service';
import { select, Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors';
import { CategoryType } from '../enums/category-type.enum';
import { Preview } from '../interfaces/preview';
@Injectable({
  providedIn: 'root'
})
export class MoviesService extends ResourceService<MoviesStore> {

  slash = environment.production ? '' : '/';
  constructor(httpClient: HttpClient, private store: Store<State>) {
    super(httpClient);
    this.endPointUrl = { preview: `${this.slash}movies/preview/`,
                        info: `${this.slash}movies/info`, details: `${this.slash}movies/details/` };
   }

  getMovies(): Observable<MoviesStore> {
    return this.httpClient.get<MoviesStore>(`${environment.apiUrl}${this.endPointUrl.preview}`, this.httpOptions);
  }

  getDetailsForMovies(): Observable<MovieDetail[]> {
    const httpArray: Array<Observable<MovieDetail>> = [];

    return this.store.pipe(select(getItems(CategoryType.Movies, false, 'results')))
     .pipe(
       map((data) => {
         data.map((item: Preview) => {
           httpArray.push(this.httpClient.get<any>(`${environment.apiUrl}${this.endPointUrl.details}${item.id}`, this.httpOptions));
         });
     }),
     switchMap(() => {
       return forkJoin(httpArray);
     }),
     map((items: MovieDetail[]) => {
       return items;
     }));
  }

}
