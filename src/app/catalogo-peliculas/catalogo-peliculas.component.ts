import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';


type Pelicula = {
  titulo: string;
  director: string;
  anyo: number;
  genero: string;
  calificacion: number;
  nuevaCalificacion?: any;

}

@Component({
  selector: 'app-catalogo-peliculas',
  imports: [NgFor, FormsModule],
  templateUrl: './catalogo-peliculas.component.html',
  styleUrl: './catalogo-peliculas.component.css'
})
export class CatalogoPeliculasComponent {
  catalogoPeliculas: Pelicula[] = [
    {titulo: "El Padrino", director: "Francis Ford Coppola", anyo: 1972, genero: "Drama", calificacion: 9.2},
    {titulo: "El Padrino II", director: "Francis Ford Coppola", anyo: 1974, genero: "Drama", calificacion: 9.0},
    {titulo: "El Padrino III", director: "Francis Ford Coppola", anyo: 1990, genero: "Drama", calificacion: 7.6},
    {titulo: "Pelicula 1", director: "Director 1", anyo: 2021, genero: "Accion", calificacion: 8.0},
    {titulo: "Pelicula 2", director: "Director 2", anyo: 2022, genero: "Comedia", calificacion: 7.5},
    {titulo: "Pelicula 3", director: "Director 3", anyo: 2023, genero: "Romance", calificacion: 5.8},
  ];

  peliculasDrama: Pelicula[] = [];
  top3Peliculas: Pelicula[] = [];
  promedioCalificaciones: number = 0;

  constructor() {
    this.peliculasDrama = this.buscarPorGenero("Drama");
    this.top3Peliculas = this.mejoresPeliculas();
    this.promedioCalificaciones = this.calificaPromedio();
  }

  buscarPorGenero(genero: string): Pelicula[] {
    return this.catalogoPeliculas.filter(pelicula => pelicula.genero.toLowerCase() === genero.toLowerCase());
  }

  mejoresPeliculas(): Pelicula[] {
    return this.catalogoPeliculas.sort((a, b) => b.calificacion - a.calificacion).slice(0, 3);
  }

  calificaPromedio(): number {
    return this.catalogoPeliculas.reduce((acc, pelicula) => acc + pelicula.calificacion, 0) / this.catalogoPeliculas.length;
  }

  actualizarCalificacion(titulo: string, nuevaCalificacion: number): void {
    if (nuevaCalificacion == null || nuevaCalificacion < 0 || nuevaCalificacion>10) {
      console.error('La calificación no puede estar vacía ni ser menor a 0');
      return;
    }

    const pelicula = this.catalogoPeliculas.find(p => p.titulo === titulo);
    if (pelicula) {
      pelicula.calificacion = nuevaCalificacion;
      this.top3Peliculas = this.mejoresPeliculas();
      this.promedioCalificaciones = this.calificaPromedio();
    }
  }
}
