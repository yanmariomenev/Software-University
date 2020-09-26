import {NgModule} from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MovieSearchComponent } from "./components/movie-search/movie-search.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { SingleMovieResolver } from "./services/resolvers/single-movie.resolver";

const appRoutes : Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'movies'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movie/:id', component: MovieDetailsComponent, resolve: {singleMovie: SingleMovieResolver}},
    {path: 'movies/search', component: MovieSearchComponent},
];

@NgModule({
imports:[
 RouterModule.forRoot(appRoutes)
],
exports:[
RouterModule
]
})
export class AppRoutingModule{ }