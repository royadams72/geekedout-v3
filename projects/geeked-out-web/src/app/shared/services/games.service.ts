import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@envweb/environment';
import { catchError} from 'rxjs/operators';
import { Game } from '@web-interfaces/game';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  // `https://www.gamerpower.com/api/giveaways`
  constructor(private http: HttpClient) { }
  getGames(): Observable<Game[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<Game[]>(`${environment.apiUrl}/games/getgames/`, { headers })
      .pipe(
      catchError(err => {
        console.log('caught mapping error and rethrowing', err);
        return throwError(err);
      }));
  }

}
