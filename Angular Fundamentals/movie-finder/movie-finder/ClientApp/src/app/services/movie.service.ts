import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IMovie from '../models/IMovie';

const BASE_POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular';
const BASE_THEATHER_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '?api_key=b312fdd350226b56ba8d65b73d8f6011';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }
  
  getPopularMovies(): Observable<Array<IMovie>>{
   return this.http.get<Array<IMovie>>(BASE_POPULAR_URL + API_KEY)
  }
  getInTheatherMovies(): Observable<Array<IMovie>>{
    return this.http.get<Array<IMovie>>(BASE_THEATHER_URL + API_KEY + '&with_release_type=2|3')
  }
}
