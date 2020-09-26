import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IMovie from '../models/IMovie';
import IMovieDetails from '../models/IMovieDetails';

const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_POPULAR_URL = 'discover/movie?sort_by=popularity.desc';
const BASE_THEATHER_URL = 'discover/movie?primary_release_date.gte=2019-03-01&primary_release_date.lte=2019-04-30';
const BASE_KIDS_URL = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BASE_DRAMA_URL = 'discover/movie?with_genres=18&primary_release_year=2020';

const API_KEY = '&api_key=b312fdd350226b56ba8d65b73d8f6011';
const API_ALT_KEY = '?api_key=b312fdd350226b56ba8d65b73d8f6011';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }
  
  getPopularMovies(): Observable<Array<IMovie>>{
   return this.http.get<IMovie[]>(BASE_URL + BASE_POPULAR_URL + API_KEY)
   .pipe(
     map((data) => data['results'].slice(0, 6))
   );
  }

  getInTheatherMovies(): Observable<Array<IMovie>>{
    return this.http.get<Array<IMovie>>(BASE_URL + BASE_THEATHER_URL + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }

  getPopularKidsMovies(): Observable<Array<IMovie>>{
    return this.http.get<Array<IMovie>>(BASE_URL + BASE_KIDS_URL + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }

  getBestDramaMovies(): Observable<Array<IMovie>>{
    return this.http.get<Array<IMovie>>(BASE_URL + BASE_DRAMA_URL + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }

  getMovieById(id: string){
    return this.http.get<IMovieDetails>(BASE_URL + `movie/${id}` + API_ALT_KEY);
  }

  searchMovie(quary: string){
    return this.http.get<IMovie[]>(BASE_URL + 'search/movie' + API_ALT_KEY + `&query=${quary}`);
  }
}
