import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies: any = [];
  constructor(private moviesService:MoviesService) {
  }
  ngOnInit(){
    this.moviesService.GetMovieData().subscribe(
    (data)=>{
        this.movies = data.Search;
        console.log(this.movies);
        }
      );
    }
  }
  