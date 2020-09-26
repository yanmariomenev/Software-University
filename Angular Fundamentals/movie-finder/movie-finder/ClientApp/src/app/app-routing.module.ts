import {NgModule} from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesComponent } from "./movies/movies.component";
import { SingleMovieResolver } from "./services/resolvers/single-movie.resolver";

const appRoutes : Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'movies'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movie/:id', component: MovieDetailsComponent, resolve: {singleMovie: SingleMovieResolver}}
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