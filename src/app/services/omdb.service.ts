import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OMDBService {
  private API_KEY: string = "4fd54a85";
  // private API_KEY: string = environment.API_KEY;
  constructor(private http: HttpClient) { }
  public getMovie(title: string, toggle: boolean, year: number){
    if(toggle == true){
      return this.http.get<any>(`http://www.omdbapi.com/?apikey=${this.API_KEY}&y=${year}&t=${title}&plot=full`);
    }
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=${this.API_KEY}&y=${year}&t=${title}`);
  }
}
