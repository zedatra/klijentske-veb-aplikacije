import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  public email: string = ''
  public password: string = ''

  public updateEmail(e: any){
    this.email = e.target.value
  }
  public updatePassword(e: any){
    this.password = e.target.value
  }
  public doLogin(){
    alert('Nemaaaaaa??!!?!?!')
  }


}
