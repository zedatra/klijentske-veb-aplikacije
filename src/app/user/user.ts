import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { OrderModel } from '../../models/order.model';
import { CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  public orders: OrderModel[] = []

  constructor(private router: Router){
    if(!UserService.getActiveUser()){
      //Vrati na home page
      router.navigate(['/home'])
      return
    }

    this.orders = UserService.getActiveUser()!.orders

  }

}
