import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@web-env/environment';
import { map, mergeMap } from 'rxjs/operators';
import { MoviesResponse, MoviesImageData } from '@web/shared/interfaces/movies';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MoviesResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<MoviesImageData>(`${environment.apiUrl}/movies/info`, { headers })
      .pipe(mergeMap((data) => {
        return this.getMoviesInfo(data);
      }));
  }

   getMoviesInfo(imageData: any): Observable<MoviesResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<MoviesResponse>(`${environment.apiUrl}/movies/preview`, { headers })
    .pipe(
      map((data) => {
        return {...data, imageData};
    }));
  }
}
