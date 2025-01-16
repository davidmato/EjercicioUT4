import { Empleado } from './Empleado';

export class EmpleadoPorHoras extends Empleado {
  tarifaPorHora: number;
  horasTrabajadas: number;

  constructor(nombre: string, apellido: string, salario: number, tarifaPorHora: number, horasTrabajadas: number) {
    super(nombre, apellido, salario);
    this.tarifaPorHora = tarifaPorHora;
    this.horasTrabajadas = horasTrabajadas;
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()}, Tarifa por Hora: ${this.tarifaPorHora}, Horas Trabajadas: ${this.horasTrabajadas}`;
  }

  calcularSalario(): number {
    return this.horasTrabajadas * this.tarifaPorHora;
  }
}
