import { AfterViewInit, asNativeElements, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Preview } from '@web/shared/interfaces/preview';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { search } from '@web/store/selectors';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { distinctUntilChanged, filter, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('serachField', { static: false }) serachField: ElementRef<HTMLInputElement> = {} as ElementRef;
  constructor(private store: Store<State>, private renderer: Renderer2) { }
data: any;
defaultImage = '';
isLoaded = true;
search$ = new Observable<Array<Preview>>();
searchStr = new BehaviorSubject<string>('');
  ngOnInit(): void {
    this.defaultImage = 'assets/images/defaultImage.png';

  }

  ngAfterViewInit(): void {
    this.searchStr.pipe(
      distinctUntilChanged(),
      filter((str) => str.replace(/\s+/g, '').length >= 3 && str.replace(/\s+/g, '') !== ''),
      switchMap((str: any) => this.store.pipe(select(search(str)))))
    .subscribe(data => {
      this.data = [...data[0], ...data[1], ...data[2], ...data[3]];
        // console.log(str);
    });


    // this.renderer.listen(this.serachField.nativeElement, 'keyup', (event) => {
    // //  console.log(event);
    // if (this.serachField.nativeElement.value.length < 3) { return; }
    // this.store.pipe(select(search(this.serachField.nativeElement.value)),
    //     filter(() => this.serachField.nativeElement.value.length >= 3 ),
    //     distinctUntilChanged(),
    //     tap(() => this.store.dispatch(AppActions.setPageLoading({ pageLoading: true }))),
    //     )
    //     .subscribe(data => {
    //         this.data = [...data[0], ...data[1], ...data[2], ...data[3]];
    //         this.store.dispatch(AppActions.setPageLoading({ pageLoading: false }));
    //         console.log(this.data);
    //       });
    //   });
    }
}
