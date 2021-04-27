import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { getAllAlbums } from '@web/store/selectors/';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-music-main',
  templateUrl: './music-main.component.html',
  styleUrls: ['./music-main.component.scss']
})
export class MusicMainComponent implements OnInit {
  store$ = new Observable<Array<Preview>>();
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store$ = this.store.pipe(select(getAllAlbums));
  }

}
