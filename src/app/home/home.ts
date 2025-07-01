import { Component } from '@angular/core';
import { FilmService } from '../../services/main.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { AxiosError } from 'axios';
import { FilmModel } from '../../models/film.model';

@Component({
  selector: 'app-home',
  imports: [JsonPipe, NgIf, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  filmovi: FilmModel[] | null = null
  error: string | null = null

  constructor(){
    FilmService.getFilmovi()
      .then(rsp => this.filmovi = rsp.data.results)
      .catch((e:AxiosError) => this.error = `${e.code}: ${e.message}`)
  }

}