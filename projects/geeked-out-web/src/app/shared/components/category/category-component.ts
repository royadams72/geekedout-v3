import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category-component.html'
})
export class CategoryComponent implements OnChanges{

  @Input() items: Array<any> = [];
  @Input() isPreview = true;
  @Input() link = '';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
