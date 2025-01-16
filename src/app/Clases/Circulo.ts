import { Figura } from './Figura';

export class Circulo extends Figura {
  radio: number;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  override calcularArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
}
