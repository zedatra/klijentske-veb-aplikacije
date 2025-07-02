import { TheaterModel } from "../models/theater.model";

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiKey = 'ad189e37798f48c43c6306a9c5e31e7c';

  constructor(private http: HttpClient) {}

  getMovieTrailer(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<any>(url);
  }

  
}


export class TheaterService {
    static getTheater(): TheaterModel[]{
        return [
            {
                id : 1,
                name : 'Cinegrand',
                countryOfOrigin: 'Serbia',
                website: 'https://rakovica.cinegrand-mcf.rs/'
            },
            {
                id : 2,
                name : 'Cineplexx',
                countryOfOrigin: 'Serbia',
                website: 'https://www.cineplexx.rs/'
            },
            {
                id : 3,
                name : 'Tuckwood',
                countryOfOrigin: 'Serbia',
                website: 'https://www.tuck.rs/'
            },
            {
                id : 4,
                name : 'Roda Cineplex',
                countryOfOrigin: 'Serbia',
                website: 'http://www.rodacineplex.com/'
            },
        ]
    }
}