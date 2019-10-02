import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
 @Input() items: any[] = [];
  constructor(private router: Router) {
   }
  seeDetails(item: any) {
    let movieId = item.id;
    this.router.navigate(["/movie", movieId]);
  }
  ngOnInit() {

  }

}
