import { Component } from '@angular/core';
import { Vehiculo } from '../Clases/Vehiculo';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sistema-vehiculos',
  templateUrl: './sistema-vehiculos.component.html',
  styleUrls: ['./sistema-vehiculos.component.css'],
  imports: [FormsModule, NgFor]
})
export class SistemaVehiculosComponent {
  vehiculos: Vehiculo[];

  constructor() {
    const coche1 = new Vehiculo.Coche("Toyota", "Corolla", 2020, 4);
    const coche2 = new Vehiculo.Coche("Honda", "Civic", 2018, 4);
    const motocicleta1 = new Vehiculo.Motocicleta("Yamaha", "MT-07", 2019, "Deportivo");
    const motocicleta2 = new Vehiculo.Motocicleta("Harley-Davidson", "Street 750", 2021, "Cruiser");
    this.vehiculos = [coche1, coche2, motocicleta1, motocicleta2];
  }
}
