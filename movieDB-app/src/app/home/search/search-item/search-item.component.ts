import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  @Input() movies: [];
  seeDetails(item: any) {
    let movieId = item.id;
    this.router.navigate(["/movie", movieId]);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
