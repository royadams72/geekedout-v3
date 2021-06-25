import { Component, Input, OnChanges, SimpleChanges, OnInit, AfterViewInit} from '@angular/core';
import { Preview } from '@web/shared/interfaces/preview';
import { ScreenWidthService } from '@web/shared/services/screen-width.service';
import { combineLatest, forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category-component.html'
})
export class CategoryComponent implements OnInit {

  @Input() items: any;
  @Input() isPreview = true;
  @Input() link = '';
  @Input() categoryTitle = '';
  smallScreen = false;
  mediumScreen = false;
  largeScreen = false;
  displayItems: any;
  defaultImage = '';
  image = '';
  constructor(private sw: ScreenWidthService) {
   }

  ngOnInit(): void {
    combineLatest([this.sw.small$, this.sw.medium$, this.sw.large$])
    .subscribe((screen) => {
      [this.smallScreen, this.mediumScreen, this.largeScreen] = screen;
      this.truncate();
    });
    this.defaultImage = 'assets/images/defaultImage.png';
    this.image = 'assets/images/image404@2x.png';
  }

  truncate(): void {
    const n = this.smallScreen ? 20 : this.mediumScreen  ? 22 : 40;
    if (!this.items) { return; }
    this.displayItems = this.items.map((item: any) => {
        const title = (item.title.length > n) ? `${item.title.substr(0, n - 1)}...` : item.title;
        return {...item, title };
      });
  }

}
