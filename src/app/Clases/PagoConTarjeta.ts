import { Pago } from './Pago';

export class PagoConTarjeta extends Pago {
  override procesarPago(): void {
    console.log("Procesando pago con tarjeta");
  }
}
