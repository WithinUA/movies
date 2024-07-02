import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/oneMovie';
import { OMDBService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: IMovie = {
    title: "",
    poster: "",
    actors: [],
    director: "",
    duration: "",
    description: "",
    rate: 0,
    year: 2000
  };

  title: string = "";
  year: number = 2000;
  descToggle: boolean = false;
  response: boolean | undefined;

  constructor(private httpService: OMDBService){}
  public ngOnInit(): void {
  }
  public async searchMovie(){
    this.httpService.getMovie(this.title, this.descToggle, this.year)
    .subscribe((data)=> {
      console.log(data);
      this.response = data.Response;
      console.log(this.response);
      if(data.Response == "False"){
        this.response = false;
        return;
      }
      else{
        this.response = true;
        this.movie.title = data.Title;
        this.movie.poster = data.Poster;
        this.movie.actors = data.Actors;
        this.movie.description = data.Plot;
        this.movie.duration = data.Runtime;
        this.movie.director = data.Director;
        this.movie.rate = data.Ratings[0].Value;
        this.movie.year = parseInt(data.Year);
      }
    });
  }
}
