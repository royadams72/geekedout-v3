import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-comics-main',
  templateUrl: './comics-main.component.html',
  styleUrls: ['./comics-main.component.scss']
})
export class ComicsMainComponent implements OnInit {
cDate: any;
  constructor() { }

  ngOnInit(): void {
      // this.comicsService.getPreview(50).subscribe((data: ComicResponse) =>
      // {
      //   this.cDate = data.results[0].dates[0].date;
      //   console.log(data);
      // }

      // );
  }

}
