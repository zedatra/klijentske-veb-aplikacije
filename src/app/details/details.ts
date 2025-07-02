import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmModel } from '../../models/film.model';
import { FilmService } from '../../services/main.service';
import { JsonPipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  imports: [JsonPipe, MatCardModule, MatListModule, MatButtonModule, CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {

  public film: FilmModel | null = null

  public trailerKey: string | null = null;


  public constructor (private route: ActivatedRoute){
    route.params.subscribe(params => {
      FilmService.getFilmoviById(params['id'])
        .then(rsp => {
          this.film = rsp.data

      })
    })
  }
}



