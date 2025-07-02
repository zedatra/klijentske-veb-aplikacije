import { Component } from '@angular/core';
import { FilmModel } from '../../models/film.model';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/main.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { TheaterModel } from '../../models/theater.model';
import { TheaterService } from '../../services/film.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-booknow',
  imports: [MatCardModule, NgIf, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, NgFor, MatFormFieldModule, FormsModule],
  templateUrl: './booknow.html',
  styleUrl: './booknow.css'
})
export class Booknow {

    public selectedTicketCount: number = 1;


   public selectedTheater!: string

   public totalPrice: number = 0;

updateTotalPrice(): void {
  this.totalPrice = this.selectedTicketCount * this.selectedPrice;
}



    public film: FilmModel | null = null

  public trailerKey: string | null = null;

  public theaters: TheaterModel [] = TheaterService.getTheater()

  public selectedPrice: number = 15

  public constructor (private route: ActivatedRoute){
    
    route.params.subscribe(params => {
      FilmService.getFilmoviById(params['id'])
        .then(rsp => {
          this.film = rsp.data

      })
    })
  }
  public doBooknow(){
    const results = UserService.createOrder({

      filmId: this.film!.id,
      title: this.film!.title,
      theater: this.selectedTheater,
      count: this.selectedTicketCount,
      pricePerItem: this.selectedPrice,
      status: 'ordered',
      rating: null

      

    })
    alert(`You have successfully made a reservation, total cost is ${this.totalPrice} €`);
  }

}
