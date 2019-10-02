import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../services/movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private moviedb_service: MoviedbService) { }

  ngOnInit() {
  }

}
