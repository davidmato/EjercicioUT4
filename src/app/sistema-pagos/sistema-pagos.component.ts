import { Component } from '@angular/core';
import {Pago} from '../Clases/Pago';
import {PagoConTarjeta} from '../Clases/PagoConTarjeta';
import {PagoConPaypal} from '../Clases/PagoConPaypal';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-sistema-pagos',
  imports: [],
  templateUrl: './sistema-pagos.component.html',
  styleUrl: './sistema-pagos.component.css'
})
export class SistemaPagosComponent {

  pagos: Pago[];

  constructor() {
    this.pagos = [
      new PagoConTarjeta(),
      new PagoConPaypal(),
      new PagoConTarjeta()
    ];
  }

  procesarPagos(): void {
    this.pagos.forEach(pago => pago.procesarPago());
  }
}
