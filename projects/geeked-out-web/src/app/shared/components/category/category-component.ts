import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-category',
  templateUrl: './category-component.html'
})
export class CategoryComponent implements OnInit {

  @Input() items: any;
  @Input() isPreview = true;
  @Input() link = '';
  constructor() {

   }

  ngOnInit(): void {
    // console.log(this.items);
  }

}
