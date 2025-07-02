import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  public email: string = ''
  public password: string = ''

  constructor(private router: Router){


  }

  public doLogin(){
    if (UserService.login(this.email, this.password)){
      //redirect to user component
     this.router.navigate([' /about ']) 
     return

    }

    alert('Bad email or password')
  }


}
