import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store: Store) {}
  ngOnInit(): void {
  this.store.dispatch(AppActions.loadComicData());
  this.store.dispatch(AppActions.loadMusicData());
  this.store.dispatch(AppActions.loadMoviesData());
  this.store.dispatch(AppActions.loadGamesData());
  }
}
