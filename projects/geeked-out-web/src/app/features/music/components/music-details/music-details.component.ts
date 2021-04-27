import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Artist } from '@web/shared/interfaces/music';
import { State } from '@web/store/reducers';
import { getDetail } from '@web/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {
  // $albumDetail = new Observable<Artist>();
  albumDetail$:any;
  constructor(private store: Store<State>) {

   }

  ngOnInit(): void {
    this.albumDetail$ = this.store.pipe(select(getDetail)).subscribe(data => console.log(data));
  }

}
