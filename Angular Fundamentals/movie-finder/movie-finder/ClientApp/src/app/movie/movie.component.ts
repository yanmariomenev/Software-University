import { Component, Input, OnInit, Output } from '@angular/core';
import IMovie from '../models/IMovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: IMovie;
  imagePath: string;
  

  constructor() { }

  ngOnInit() {
    this.imagePath = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }
}
