export class Empleado {
  nombre: string;
  apellido: string;
  salario: number;

  constructor(nombre: string, apellido: string, salario: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
  }

  mostrarDetalles(): string {
    return `Nombre: ${this.nombre} ${this.apellido}, Salario: ${this.salario}`;
  }
}
