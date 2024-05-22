import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-listar-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private libroService: LibroService) {}

  ngOnInit() {
    this.libroService.listarLibros().subscribe((data: Libro[]) => {
      this.libros = data;
    });
  }
}
