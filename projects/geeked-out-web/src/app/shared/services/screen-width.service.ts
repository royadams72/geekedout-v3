import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScreenActions } from '@web/store/actions';
import { State } from '@web/store/reducers';

@Injectable({
  providedIn: 'root'
})
export class ScreenWidthService {
  // TODO: possibly return the entire state and then can subscribe to one stream instead of indiviual streams
  small$ = this.store.select(state => state.screen.small);
  medium$ = this.store.select(state => state.screen.medium);
  large$ = this.store.select(state => state.screen.large);
  constructor(private store: Store<State>) { }

  setWindowWidth(windowWidth: number): void {
    this.store.dispatch(ScreenActions.setScreen({windowWidth}));
  }
}
