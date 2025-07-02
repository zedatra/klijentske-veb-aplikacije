import { Component } from '@angular/core';
import { TheaterModel } from '../../models/theater.model';
import { TheaterService } from '../../services/film.service';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-theater',
  imports: [MatTableModule, NgIf, MatButtonModule],
  templateUrl: './theater.html',
  styleUrl: './theater.css'
})
export class Theater {
    displayedColumns: string[] = ['id', 'name', 'countryOfOrigin', 'website', 'actions'];
    dataSource: TheaterModel[] = TheaterService.getTheater();
}
