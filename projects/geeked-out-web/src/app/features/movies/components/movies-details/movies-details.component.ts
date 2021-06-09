import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { MoviesService } from '@web/shared/services/movies.service';
import { AppActions } from '@web/store/actions';
import { State } from '@web/store/reducers';
import { getItem } from '@web/store/selectors';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  movieDetails$: any;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // this.movieDetails$ = this.store.pipe(select(getDetail<any>(CategoryType.Movies, 'results'))).subscribe(data => {
    //   this.store.dispatch(AppActions.setSelectedItem({item: data}));
    //   console.log(data);
    // });

        this.movieDetails$ = this.store.pipe(select(getItem)).subscribe(data => console.log(data));
  }

}
