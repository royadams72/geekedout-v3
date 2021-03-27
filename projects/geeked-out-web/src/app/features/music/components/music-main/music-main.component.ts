import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-music-main',
  templateUrl: './music-main.component.html',
  styleUrls: ['./music-main.component.scss']
})
export class MusicMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.musicService.getMusic(3)
    // .subscribe(data => console.log(data));
  }

}
