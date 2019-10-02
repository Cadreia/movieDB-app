import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/services/movie-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  goHome() {
  this.moviedb_service.isSearched = false;
  this.router.navigate(['/']);
  }

  constructor(private moviedb_service: MoviedbService, private router: Router) { }

  ngOnInit() {
  }

}
