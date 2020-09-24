import { Component, OnInit } from '@angular/core';
import IMovie from '../models/IMovie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies : Array<IMovie>;
  inTheatherMovies : Array<IMovie>;
  popularKidsMovies : Array<IMovie>;
  popularDramaMovies : Array<IMovie>;
  messageOnClick = null;
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
  this.moviesService.getPopularMovies().subscribe(data => {
    this.popularMovies = data;
  });

  this.moviesService.getInTheatherMovies().subscribe(data => {
    this.inTheatherMovies = data;
  });

  this.moviesService.getPopularKidsMovies().subscribe(data => {
    this.popularKidsMovies = data;
  });

  this.moviesService.getBestDramaMovies().subscribe(data => {
    this.popularDramaMovies = data;
  });
  }
  fromChild(event){
  this.messageOnClick = event;
  }

}
