import { Figura } from './Figura';

export class Rectangulo extends Figura {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }

  override calcularArea(): number {
    return this.base * this.altura;
  }
}
