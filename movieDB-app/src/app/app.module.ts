import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { MoviesComponent } from './home/movies/movies.component';
import { MovieDetailComponent } from './home/movies/movie-detail/movie-detail.component';
import { SearchComponent } from './home/search/search.component';
import { MoviedbService } from './services/movie-db.service';
import { MovieImagePipe } from './pipes/movie-image.pipe';
import { MoviesListComponent } from './home/movies/movies-list/movies-list.component';
import { MoviesItemComponent } from './home/movies/movies-list/movies-item/movies-item.component';
import { SearchItemComponent } from './home/search/search-item/search-item.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    MoviesComponent,
    MoviesItemComponent,
    MoviesListComponent,
    MovieDetailComponent,
    SearchComponent,
    MovieImagePipe,
    SearchItemComponent,
    LoadingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [MoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
