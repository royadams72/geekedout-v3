import { AfterViewInit, asNativeElements, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { search } from '@web/store/selectors';

import { distinctUntilChanged, filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('serachField', { static: false }) serachField: ElementRef<HTMLInputElement> = {} as ElementRef;
  constructor(private store: Store<State>, private renderer: Renderer2) { }
data: any;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderer.listen(this.serachField.nativeElement, 'keyup', (event) => {
      this.store.pipe(select(search(this.serachField.nativeElement.value)),
      filter(() => this.serachField.nativeElement.value.length >= 3 ),
      distinctUntilChanged(),
      tap(() => this.store.dispatch(AppActions.setPageLoading({ pageLoading: true }))),
      take(1))
      .subscribe(data => {
          this.data = data;
          this.store.dispatch(AppActions.setPageLoading({ pageLoading: false }));
          console.log(data);
        });
    });
  }
}
