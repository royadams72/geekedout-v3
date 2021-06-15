import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { search } from '@web/store/selectors';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  public searchString = new BehaviorSubject<string>('');
  @ViewChild('serachField') serachField: ElementRef<HTMLInputElement> = new ElementRef<any>('');
  constructor(private store: Store<State>, private renderer: Renderer2) { }
data: any;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderer.listen(this.serachField.nativeElement, 'keyup', (event) => {
      if (this.serachField.nativeElement.value.length < 3) { return; }
      this.store.dispatch(AppActions.setPageLoading({ pageLoading: true }))
      this.store.pipe(select(search(this.serachField.nativeElement.value)),take(1))
      .subscribe(data => {
          // this.store.dispatch(AppActions.setSelectedItem({item: data}));
          this.data = data;
          this.store.dispatch(AppActions.setPageLoading({ pageLoading: false }));
          console.log(data);
        });
    })

    // console.log(this.serachField.nativeElement);
  }
}
