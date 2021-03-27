import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {map} from 'rxjs/operators';
import { ComicResponse } from '../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  constructor(private httpClient: HttpClient) { }

  getPreview(limit?: number, offset?: number): Observable<ComicResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<ComicResponse>(`${environment.apiUrl}/comics/preview/ ${limit}/${offset}`, { headers});
  }

}
