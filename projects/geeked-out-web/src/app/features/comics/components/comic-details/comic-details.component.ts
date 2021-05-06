import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Comic, ComicDetail, ComicStore } from '@web/shared/interfaces/comic';
import { State } from '@web/store/reducers';
import { getDetail } from '@web/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss']
})
export class ComicDetailsComponent implements OnInit {
  // comicDetail$ = new Observable<Comic>();
  comicDetail$: any;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // this.comicDetail$ = this.store.pipe(select(getComicDetail)).subscribe(data => console.log(data));
    this.comicDetail$ = this.store.pipe(select(
      getDetail<ComicStore, ComicDetail, Comic>('comics', 'results')))
      .subscribe(data => console.log(data));

    // getDetail = (subState: string, arrayName: any)
  }

}
