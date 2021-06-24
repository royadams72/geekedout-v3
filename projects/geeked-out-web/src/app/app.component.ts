import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScreenWidthService } from './shared/services/screen-width.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
  constructor(private sb: ScreenWidthService, private renderer: Renderer2, private win: Window) {}
  ngOnInit(): void {
    this.sb.setWindowWidth(this.win.innerWidth);
    this.renderer.listen('window', 'resize', () => {
      this.sb.setWindowWidth(this.win.innerWidth);
    });
  }
}
