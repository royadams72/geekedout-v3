import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@web-env/environment';
import { EndPoints } from '../interfaces/endpoints';
@Injectable({
  providedIn: 'root'
})
export class ResourceService<T> {
  protected endPointUrl: EndPoints = {} as EndPoints;
  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(protected httpClient: HttpClient) {}

  read(limit?: number, offset: string = ''): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<T>(`${environment.apiUrl}${this.endPointUrl.preview}${limit}/${offset}`, this.httpOptions);
  }

}
