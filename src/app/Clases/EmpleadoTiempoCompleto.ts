import { Empleado } from './Empleado';

export class EmpleadoTiempoCompleto extends Empleado {
  horasExtras: number;
  bonoPorHoraExtra: number;

  constructor(nombre: string, apellido: string, salario: number, horasExtras: number, bonoPorHoraExtra: number) {
    super(nombre, apellido, salario);
    this.horasExtras = horasExtras;
    this.bonoPorHoraExtra = bonoPorHoraExtra;
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()}, Horas Extras: ${this.horasExtras}, Bono por Hora Extra: ${this.bonoPorHoraExtra}`;
  }

  calcularSalario(): number {
    return this.salario + (this.horasExtras * this.bonoPorHoraExtra);
  }
}
