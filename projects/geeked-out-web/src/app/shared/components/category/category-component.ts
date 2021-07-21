import { Component, Input, OnInit} from '@angular/core';
import { CategoryType } from '@web/shared/enums/category-type.enum';
import { Paths } from '@web/shared/enums/paths.enums';
import { Preview } from '@web/shared/interfaces/preview';
import { ScreenWidthService } from '@web/shared/services/screen-width.service';
import { combineLatest } from 'rxjs';

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
  errorImage = `${Paths.Images}/image404@2x.png`;
  isLoaded = false;
  categoryClass = '';
  image = '';
  constructor(private sw: ScreenWidthService) {
   }

  ngOnInit(): void {
    this.categoryClass = `category__item--${this.categoryTitle.toLowerCase()}`;
    this.displayItems = this.items;
    this.defaultImage = 'assets/images/defaultImage.png';
    this.watchScreenSize();
    this.fadeInText();
  }



  getClass(category: string): any {
    return {
      [`category__item--${category.toLowerCase()}`] : this.isLoaded
    };

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

  setErrorImage(): string {
    // console.log('setErrorPic');
    return  this.categoryTitle === 'Games' ? `${Paths.Images}/image404-450x250@2x.png` :
    `${Paths.Images}/image404@2x.png`;
  }

}
