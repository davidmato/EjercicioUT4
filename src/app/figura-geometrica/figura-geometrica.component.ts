import { Component } from '@angular/core';
import {Figura} from '../Clases/Figura';
import {Circulo} from '../Clases/Circulo';
import {Rectangulo} from '../Clases/Rectangulo';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-figura-geometrica',
  imports: [NgFor],
  templateUrl: './figura-geometrica.component.html',
  styleUrl: './figura-geometrica.component.css'
})
export class FiguraGeometricaComponent {
  figuras: Figura[];
  areas: number[];

  constructor() {
    this.figuras = [
      new Rectangulo(10, 5),
      new Circulo(7),
      new Rectangulo(3, 8),
      new Circulo(4)
    ];
    this.areas = this.calcularAreas(this.figuras);
  }

  calcularAreas(figuras: Figura[]): number[] {
    return figuras.map(figura => figura.calcularArea());
  }

}
