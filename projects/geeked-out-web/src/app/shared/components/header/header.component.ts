import { Component, OnInit } from '@angular/core';
import { Paths } from '@web/shared/enums/paths.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
navImagePath = '';
  constructor() { }

  ngOnInit(): void {
    this.navImagePath = Paths.NavImages;
  }

}
