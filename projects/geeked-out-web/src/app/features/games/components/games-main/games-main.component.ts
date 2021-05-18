import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Preview } from '@web/shared/interfaces/preview';
import { GamesService } from '@web/shared/services/games.service';
import { State } from '@web/store/reducers';
import { getItems } from '@web/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games-main',
  templateUrl: './games-main.component.html',
  styleUrls: ['./games-main.component.scss']
})
export class GamesMainComponent implements OnInit {
  store$ = new Observable<Array<Preview>>();
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store$ = this.store.pipe(select(getItems(CategoryType.Games, false)));
  }

}
