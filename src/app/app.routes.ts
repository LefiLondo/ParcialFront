import { Routes } from '@angular/router';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';

export const routes: Routes = [
  { path: 'listar-libros', component: ListarLibrosComponent },
  { path: 'agregar-libro', component: AgregarLibroComponent },
  { path: '', redirectTo: '/listar-libros', pathMatch: 'full' }
];
