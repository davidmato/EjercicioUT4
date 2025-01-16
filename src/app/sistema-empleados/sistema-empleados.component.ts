import { Component } from '@angular/core';
import {EmpleadoPorHoras} from '../Clases/EmpleadoPorHoras';
import {EmpleadoTiempoCompleto} from '../Clases/EmpleadoTiempoCompleto';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-sistema-empleados',
  imports: [NgFor],
  templateUrl: './sistema-empleados.component.html',
  styleUrl: './sistema-empleados.component.css'
})
export class SistemaEmpleadosComponent {
  empleados: any[];

  constructor() {
    const empleadoTiempoCompleto = new EmpleadoTiempoCompleto("Juan", "Pérez", 3000, 10, 20);
    const empleadoPorHoras = new EmpleadoPorHoras("Ana", "García", 0, 15, 160);
    this.empleados = [empleadoTiempoCompleto, empleadoPorHoras];
  }
}
