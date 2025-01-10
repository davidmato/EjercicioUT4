import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-clasificacion-palabras',
  imports: [FormsModule, NgFor],
  templateUrl: './clasificacion-palabras.component.html',
  standalone: true,
  styleUrl: './clasificacion-palabras.component.css'
})
export class ClasificacionPalabrasComponent {

  palabras: string[] = ["manzana", "pera", "melon", "plátano", "kiwi", "fresa"];
  palabrasMayusculas: string[];
  palabrasMasDeCincoLetras: string[];
  palabrasOrdenadasPorLongitud: string[];

  constructor() {
    this.palabrasMayusculas = this.palabras.map(palabra => palabra.toUpperCase());
    this.palabrasMasDeCincoLetras = this.palabras.filter(palabra => palabra.length > 5);
    this.palabrasOrdenadasPorLongitud = [...this.palabras].sort((a, b) => b.length - a.length);
  }
}
