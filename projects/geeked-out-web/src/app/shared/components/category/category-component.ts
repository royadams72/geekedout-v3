import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Preview } from '@web/shared/interfaces/preview';
import { ScreenWidthService } from '@web/shared/services/screen-width.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category-component.html'
})
export class CategoryComponent implements OnInit {

  @Input() items: any;
  @Input() isPreview = true;
  @Input() link = '';
  smallScreen: boolean = false;
  mediumScreen: boolean = false;
  largeScreen: boolean = false;

  constructor(private sw: ScreenWidthService) {
    this.sw.small$.subscribe((isSmall) => {this.smallScreen = isSmall; console.log('isSmall =', isSmall)});
    this.sw.medium$.subscribe((isMedium) => {this.mediumScreen = isMedium; console.log('isMedium =', isMedium)});
    this.sw.large$.subscribe((isLarge) => {this.largeScreen = isLarge; console.log('isLarge =', isLarge)});
   }

  ngOnInit(): void {
  }

  imageFunction(item: Preview) {
    console.log(item.imageLarge,);
    return true;
  }

}
