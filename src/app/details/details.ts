import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmModel } from '../../models/film.model';
import { FilmService } from '../../services/main.service';
import { JsonPipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [JsonPipe, MatCardModule, MatListModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  public film: FilmModel | null = null;
  public trailerUrl: SafeResourceUrl | null = null;

  public constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    route.params.subscribe(params => {
      const filmId = params['id'];

      FilmService.getFilmoviById(filmId).then(rsp => {
        this.film = rsp.data;


        this.fetchTrailer(filmId);
      });
    });
  }

  private fetchTrailer(filmId: number) {
    const apiKey = '38faa479a55dfce6e44a6a0c87f8819d';
    const url = `https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${apiKey}&language=en-US`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(
          (vid: any) => vid.site === 'YouTube' && vid.type === 'Trailer'
        );
        if (trailer) {
          this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${trailer.key}`
          );
        }
      });
  }
}



