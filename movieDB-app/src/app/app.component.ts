import { Component } from '@angular/core';
import { MoviedbService } from './services/movie-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private moviedb_service: MoviedbService) { 
  }

}
