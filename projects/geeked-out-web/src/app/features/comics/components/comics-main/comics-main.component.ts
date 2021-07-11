import { Component, OnInit, AfterViewInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { ComicStore } from '@web/shared/interfaces/comic';
import { Preview } from '@web/shared/interfaces/preview';
import { State } from '@web/store/reducers';
import { getCurrPrevUrls, getItems } from '@web/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics-main',
  templateUrl: './comics-main.component.html',
  styleUrls: ['./comics-main.component.scss']
})
export class ComicsMainComponent implements OnInit {
  store$ = new Observable<Array<Preview>>();
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store$ = this.store.pipe(select(getItems(CategoryType.Comics, false, 'results')));
  }
}

