import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/services/movie-db.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  popularMovies: [];
  upcomingMovies: [];

  constructor(private moviedbService: MoviedbService) {
    this.moviedbService.getPopularMovies().subscribe((movie: any) => {
    this.popularMovies = movie.results;
    console.log(this.popularMovies);
    });

    this.moviedbService.getUpcomingMovies().subscribe((movie: any) => {
      this.upcomingMovies = movie.results;
      console.log(movie);
      });
   }

  ngOnInit() {
  }

}
