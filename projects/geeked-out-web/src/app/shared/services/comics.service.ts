import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@web-env/environment';
import { ComicStore } from '@web/shared/interfaces/comic';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class ComicsService extends ResourceService<ComicStore> {
  slash = environment.production ? '' : '/';
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endPointUrl = {preview: `${this.slash}comics/preview/`};
   }

  getComics(limit?: number, offset = '0'): Observable<ComicStore> {
    return this.read(limit, offset);
  }

}
