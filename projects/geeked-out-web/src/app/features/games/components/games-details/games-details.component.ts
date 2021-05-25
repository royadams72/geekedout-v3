import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { GameDetail } from '@web/shared/interfaces/game';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getDetail } from '@web/store/selectors';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.scss']
})
export class GamesDetailsComponent implements OnInit {
 gameDetail$: any;
  constructor(private store: Store<State>) { }


  ngOnInit(): void {
    // TODO: this action should be despatched in router effects service to update state in reducer function and then get the select detail
    this.gameDetail$ = this.store.pipe(select(getDetail<GameDetail>(CategoryType.Games))).subscribe(data => {
      this.store.dispatch(AppActions.setSelectedItem({item: data}));
      console.log(data);
    });
  }

}
