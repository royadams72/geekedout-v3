import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '@web/store/actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private store: Store) {}
  ngOnInit(): void {
  this.store.dispatch(AppActions.loadComicData());
  this.store.dispatch(AppActions.loadMusicData());
  this.store.dispatch(AppActions.loadMoviesData());
  this.store.dispatch(AppActions.loadGamesData());
  }

}
