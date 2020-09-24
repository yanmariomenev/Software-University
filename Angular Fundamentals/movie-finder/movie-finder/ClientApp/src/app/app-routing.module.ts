import {NgModule} from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesComponent } from "./movies/movies.component";

const appRoutes : Route[] = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movie/:id', component: MovieDetailsComponent}
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