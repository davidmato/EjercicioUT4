import { Pago } from './Pago';

export class PagoConPaypal extends Pago {
  override procesarPago(): void {
    console.log("Procesando pago con PayPal");
  }
}
