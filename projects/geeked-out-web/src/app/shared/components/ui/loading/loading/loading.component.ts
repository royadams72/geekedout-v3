import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@web/store/reducers';
import { getPageLoading } from '@web/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(private store: Store<State>) { }
 loading = 'block';
  ngOnInit(): void {
   this.store.pipe(select(getPageLoading)).subscribe((pageLoading) => {

     this.loading = pageLoading ? 'block' : 'none';
    //  console.log(this.loading)
    })
  }

}
