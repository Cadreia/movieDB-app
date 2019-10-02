import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviedbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any = {};
  id: number;

  constructor(private route: ActivatedRoute, private moviedb_service: MoviedbService) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.moviedb_service.getMovieDetails(this.id).subscribe((data: any) => {
        this.movie = data;
        console.log(this.id);
        console.log(this.movie);
      });
    });
  }

}
