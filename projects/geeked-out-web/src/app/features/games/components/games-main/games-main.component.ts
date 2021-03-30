import { Component, OnInit } from '@angular/core';
import { GamesService } from '@web-services/games.service';

@Component({
  selector: 'app-games-main',
  templateUrl: './games-main.component.html',
  styleUrls: ['./games-main.component.scss']
})
export class GamesMainComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
       this.gamesService.getGames().subscribe((data: any) =>
      {

        console.log(data);
      }

      );
  }

}
