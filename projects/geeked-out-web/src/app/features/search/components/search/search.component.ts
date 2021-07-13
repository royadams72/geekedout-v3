import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Preview } from '@web/shared/interfaces/preview';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getSearchState, search } from '@web/store/selectors';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';

import { distinctUntilChanged, filter, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchField', { static: false }) searchField: ElementRef<HTMLInputElement> = {} as ElementRef;

  constructor(private store: Store<State>, private renderer: Renderer2, private changeDetectorRef: ChangeDetectorRef) { }
  data: any = [];
  defaultImage = '';
  isLoaded = true;
  // search$ = new Observable<Array<Preview>>();
  store$ = new Subscription();
  searchTerm$ = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.defaultImage = 'assets/images/defaultImage.png';

  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
    this.searchTerm$.unsubscribe();
  }
  ngAfterViewInit(): void {

    this.store$ = this.store.pipe(select(getSearchState)).subscribe((data) => {
      if (!data.items) { return; }
      this.searchField.nativeElement.value = data.searchTerm;
      this.searchTerm$.next(data.searchTerm);
      this.changeDetectorRef.detectChanges();
    });

    this.searchTerm$.pipe(
      distinctUntilChanged(),
      filter((str: string) => {
       if (!str) {
        this.data = [];
        this.store.dispatch(AppActions.setSearchStatus({items: this.data, searchTerm: this.searchTerm$.getValue()}));
        }
       return str.replace(/\s+/g, '').length >= 3 && str.replace(/\s+/g, '') !== '';
      }),
      switchMap((str: string) => this.store.pipe(select(search(str)), take(1))))
      .subscribe((data: Array<Preview[]>) => {
        this.data = [...data[0], ...data[1], ...data[2], ...data[3]];
        if (this.data.length > 0) {
          this.store.dispatch(AppActions.setSearchStatus({items: this.data, searchTerm: this.searchTerm$.getValue()}));
        }
    });
    }
}
