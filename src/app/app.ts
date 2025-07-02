import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public service = UserService

  public constructor( private router: Router ){}

  public doLogout() {
    localStorage.removeItem('active')
    this.router.navigate(['/login'])
  }
}
