import { Component, Input, OnChanges, SimpleChanges, OnInit, AfterViewInit} from '@angular/core';
import { Preview } from '@web/shared/interfaces/preview';
import { ScreenWidthService } from '@web/shared/services/screen-width.service';
import { combineLatest, forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category-component.html'
})
export class CategoryComponent implements OnInit {

  @Input() items: Array<Preview> = [];
  @Input() isPreview = true;
  @Input() link = '';
  @Input() categoryTitle = '';
  smallScreen = false;
  mediumScreen = false;
  largeScreen = false;
  displayItems: any;
  defaultImage = '';
  isLoaded = false;
  constructor(private sw: ScreenWidthService) {
   }

  ngOnInit(): void {
    this.displayItems = this.items;
    this.defaultImage = 'assets/images/defaultImage.png';
    this.watchScreenSize();
    this.fadeInText();
  }

  watchScreenSize(): void {
    combineLatest([this.sw.small$, this.sw.medium$, this.sw.large$])
    .subscribe((screen) => {
      [this.smallScreen, this.mediumScreen, this.largeScreen] = screen;
    });
  }

  fadeInText(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 700);
  }

  isStringLongerThan(str: string, n: number): boolean {
    return  str.length >= n;
  }

  isStringShorterThan(str: string, n: number): boolean {
    return  str.length < n;
  }

}
