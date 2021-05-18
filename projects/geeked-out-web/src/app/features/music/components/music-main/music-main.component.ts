import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors/';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-music-main',
  templateUrl: './music-main.component.html',
  styleUrls: ['./music-main.component.scss']
})
export class MusicMainComponent implements OnInit {
  store$ = new Observable<Array<Preview>>();
  constructor(private store: Store<State>) { }
// getItems = (subState: string, arrayName?: string, preview?: boolean)
  ngOnInit(): void {
    this.store$ = this.store.pipe(select(getItems(CategoryType.Music, false, 'items')));
  }

}
