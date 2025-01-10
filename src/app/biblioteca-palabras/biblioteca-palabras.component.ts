import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-biblioteca-palabras',
  templateUrl: './biblioteca-palabras.component.html',
  styleUrls: ['./biblioteca-palabras.component.css'],
  standalone: true,
  imports: [FormsModule, NgFor,NgIf]
})
export class BibliotecaPalabrasComponent {
  keywords: string[] = ['JavaScript', 'TypeScript', 'Node', 'React', 'Angular'];
  palabraBuscar: string = '';
  palabraAnadir: string = '';
  resultadoBusqueda: number | null = null;
  mensajeAnadir: string = '';
  mensajeBusqueda: string = '';

  buscarPalabra(): void {
    const posicion = this.keywords.indexOf(this.palabraBuscar);
    if (posicion !== -1) {
      this.resultadoBusqueda = posicion;
      this.mensajeBusqueda = `La palabra clave se encuentra en la posición: ${posicion}`;
    } else {
      this.resultadoBusqueda = null;
      this.mensajeBusqueda = 'La palabra clave no se encuentra en el array.';
    }
  }

  anadirPalabra(): void {
    if (this.keywords.indexOf(this.palabraAnadir) === -1) {
      this.keywords.push(this.palabraAnadir);
      this.mensajeAnadir = 'Palabra clave añadida.';
    } else {
      this.mensajeAnadir = 'La palabra clave ya existe.';
    }
  }

  ordenarPalabras(): void {
    this.keywords.sort();
  }
}
