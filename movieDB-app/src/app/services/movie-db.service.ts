import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Movies } from '../home/movies/movies';

@Injectable()
export class MoviedbService {
    private apikey: string = '3fb23274954353c05b54e0fa3c7f11c0';
    private baseUrl: string = 'https://api.themoviedb.org/3';
    public isSearched: boolean = false;
    
    /*getQuery(query: string) {
        const url = 'https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=en-US&callback=test';

        return this._http.jsonp(url, "");
    }*/

    getPopularMovies() {
        return this._http.get(this.baseUrl + '/discover/movie?sort_by=popularity.desc&api_key='+ this.apikey + '&language=en-US&page=1');
    }
    getUpcomingMovies() {
        return this._http.get(this.baseUrl + '/movie/upcoming?api_key='+ this.apikey + '&language=en-US&page=1');
    }
    getSearchedMovies(query: string) {
        return this._http.get(this.baseUrl + '/search/movie?api_key='+ this.apikey + '&language=en-US&query=' + query + '&page=1&include_adult=false');
    }
    getMovieDetails(id: number) {
        return this._http.get(this.baseUrl + '/movie/' + id + '?api_key=' + this.apikey + '&language=en-US');
    }
    constructor(private _http: HttpClient) { }
    //private url: string = 'https://api.themoviedb.org/3/movie/popular?api_key={this.api_key}&language=en-US&page=1&callback=JSONP_CALLBACK'

}