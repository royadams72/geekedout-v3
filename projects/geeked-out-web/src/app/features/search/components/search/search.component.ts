import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Preview } from '@web/shared/interfaces/preview';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getSearchState, search } from '@web/store/selectors';
import { BehaviorSubject, Subscription } from 'rxjs';

import { debounceTime, distinctUntilChanged, filter, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchField', { static: false }) searchField: ElementRef<HTMLInputElement> = {} as ElementRef;

  constructor(private store: Store<State>, private changeDetectorRef: ChangeDetectorRef) { }
  data: any = [];
  defaultImage = '';
  isLoaded = true;;
  store$ = new Subscription();
  searchTerm$ = new BehaviorSubject<string>('');
  noResults = false;
  ngOnInit(): void {
    this.defaultImage = 'assets/images/defaultImage.png';

  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
    this.searchTerm$.unsubscribe();
  }
  ngAfterViewInit(): void {

    this.store$ = this.store.pipe(select(getSearchState)).subscribe((data) => {
      if (!data || !data.items) { return; }
      this.searchField.nativeElement.value = data.searchTerm;
      this.searchTerm$.next(data.searchTerm);
      this.changeDetectorRef.detectChanges();
    });

    this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((str: string) => {
       str = str.replace(/\s+/g, '').trim();
       if (!str) {
        this.data = [];
        this.store.dispatch(AppActions.setSearchStatus({items: this.data, searchTerm: this.searchTerm$.getValue()}));
        }
       return str.length >= 3 && str !== '';
      }),
      switchMap((str: string) => this.store.pipe(select(search(str)), take(1))))
      .subscribe((data: Array<Preview[]>) => {
        this.data = [...data[0], ...data[1], ...data[2], ...data[3]];
        this.setNoResults(this.data);
        if (this.data.length > 0) {
          this.store.dispatch(AppActions.setSearchStatus({items: this.data, searchTerm: this.searchTerm$.getValue()}));
        }
    });
  }

  setNoResults(data: []): void {
    const searchField = this.searchTerm$.getValue().trim().length;
    this.noResults = (searchField >= 3 && data.length === 0) ? true : false;
  }

}
