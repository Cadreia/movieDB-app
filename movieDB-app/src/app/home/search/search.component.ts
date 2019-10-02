import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/movie-db.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedMovies: [];
  isSearched: boolean;
  faSearch = faSearch;

  findMovie(searched: string) {
    this.moviedb_service.getSearchedMovies(searched).subscribe(
      (movies: any) => {
        this.searchedMovies = movies.results;
        console.log(this.searchedMovies);
      }
    );
    this.moviedb_service.isSearched = true;
  }
  constructor(private moviedb_service: MoviedbService) {
    
   }

  ngOnInit() {
  }

}
