import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import IMovieDetails from '../models/IMovieDetails';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: string;
  movieDetails: IMovieDetails;
  movieGenres: string;
  constructor(
    private moviesService: MovieService,
    private route: ActivatedRoute) 
    { 

    }

  ngOnInit() {
    this.movieDetails = this.route.snapshot.data['singleMovie'];
    this.movieGenres = this.movieDetails.genres
    .map(el => el['name'])
    .join(', ');

  //  const id = this.route.snapshot.params['id'];
   
  //  this.route.params.subscribe((params: Params) => {
  //    this.id = params['id']
  //  });
   
  //  this.moviesService
  //  .getMovieById(this.id)
  //  .subscribe((data) => {
  //    this.movieDetails = data;
  //    this.movieGenres = this.movieDetails.genres
  //    .map(el => el['name'])
  //    .join(', ');
  //  });

  }

}
