import { CommonModule } from '@angular/common'
import {NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { MovieDetailsComponent } from './movie-details/movie-details.component'
import { MovieSearchComponent } from './movie-search/movie-search.component'
import { MovieComponent } from './movie/movie.component'
import { MoviesComponent } from './movies/movies.component'

@NgModule({
declarations:[
    MovieComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieDetailsComponent,
],
imports:[
    CommonModule,
    RouterModule,
    FormsModule,
],
exports:[
    MoviesComponent,
]
})

export class AppMoviesModule{

}