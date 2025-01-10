export class Vehiculo {
  marca: string;
  modelo: string;
  año: number;

  constructor(marca: string, modelo: string, año: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  mostrarDetalles(): string {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  }

  static Coche = class extends Vehiculo {
    numeroDePuertas: number;

    constructor(marca: string, modelo: string, año: number, numeroDePuertas: number) {
      super(marca, modelo, año);
      this.numeroDePuertas = numeroDePuertas;
    }

    override mostrarDetalles(): string {
      return `${super.mostrarDetalles()}, Número de puertas: ${this.numeroDePuertas}`;
    }
  }

  static Motocicleta = class extends Vehiculo {
    tipoDeManillar: string;

    constructor(marca: string, modelo: string, año: number, tipoDeManillar: string) {
      super(marca, modelo, año);
      this.tipoDeManillar = tipoDeManillar;
    }

    override mostrarDetalles(): string {
      return `${super.mostrarDetalles()}, Tipo de manillar: ${this.tipoDeManillar}`;
    }
  }
}


