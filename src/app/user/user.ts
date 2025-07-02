import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { OrderModel } from '../../models/order.model';
import { CommonModule, NgFor} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,NgFor, MatButtonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  public orders: OrderModel[] = []

  constructor(private router: Router){
    if(!UserService.getActiveUser()){
      router.navigate(['/home'])
      return
    }

    this.orders = UserService.getActiveUser()!.orders

  }

  public doChangePassword(){
    const newPassword = prompt('Enter your new password')
    if (newPassword == '' || newPassword == null){
      alert('Password cant be empty')
      return
    }
    if(UserService.changePassword(newPassword)){
      alert('Password has been changed')
    }
  }

}
