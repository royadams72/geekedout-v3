import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category-component.html'
})
export class CategoryComponent implements OnChanges{

  public items: Array<any> = [];
  // public catTitle:string;
  // public loadingMsg:string;
  // private colClass:string;
  // private isActive: string = 'inActive';
  // public loading: boolean = true;
  // public showTitle: string = 'false';
  // public showLoader: string = 'true';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      // Wait for the array to be populated
    // if (!isEmpty(this.props)){
    //     this.items = this.props.items;
    //     this.catTitle = this.props.catTitle;
    //     this.loadingMsg = this.props.loadingMsg;
    //     this.colClass = this.props.colClass;
    //   //Then turn off loader
    //     setTimeout(()=>{
    //     this.isActive = 'active';
    //     this.loading = false;
    //     this.showTitle = 'true';
    //     this.showLoader = 'false';
    //   },800);
    // }
  }

}
