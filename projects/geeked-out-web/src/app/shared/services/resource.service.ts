import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@web-env/environment';
@Injectable({
  providedIn: 'root'
})
export class ResourceService<T> {
  protected endPointUrl: string = '';
  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(protected httpClient: HttpClient) {}


  read(limit?: number, offset: string = '') {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<T>(`${environment.apiUrl}${this.endPointUrl}${limit}/${offset}`, this.httpOptions);
  }

}
