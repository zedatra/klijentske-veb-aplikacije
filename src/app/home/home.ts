import { Component } from '@angular/core';
import { FilmService } from '../../services/main.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { AxiosError } from 'axios';
import { FilmModel } from '../../models/film.model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

// Sklonio je JsonPipe iz importsa! Da zapamtimo!

@Component({
  selector: 'app-home',
  imports: [JsonPipe, NgIf, NgFor, MatButtonModule, MatCardModule, RouterLink],
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

  formatDate(iso : string) {
    return new Date(iso).toLocaleString('sr-RS')
  }

  openDetails(id: number) {

  }

}