import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FilmModel } from '../../models/film.model';
import { NgIf } from '@angular/common';
import { FilmService } from '../../services/main.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatTableModule, NgIf, MatButtonModule, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  displayedColumns: string[] = ['id', 'title', 'original_language', 'vote_average', 'actions'];
  dataSource: FilmModel[] = [];

  public constructor() {
    FilmService.getFilmovi().then(rsp => {
      this.dataSource = rsp.data.results.slice(0, 25);
    });
  }
}
