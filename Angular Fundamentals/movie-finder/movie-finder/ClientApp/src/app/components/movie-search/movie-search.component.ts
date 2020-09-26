import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import IMovie from '../../models/IMovie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchedMovies: IMovie[];
  
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params)=> {
      const query = this.route.snapshot.queryParams['search'];
      this.movieService.searchMovie(query)
      .subscribe(
        data => {this.searchedMovies = data['results'];});
    });
  }

}
