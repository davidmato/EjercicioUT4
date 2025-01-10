export class Animal {
  constructor(
    public especie: string,
    public nombre: string,
    public edad: number,
    public habitat: string
  ) {}

  cambiarHabitat(nuevoHabitat: string): void {
    this.habitat = nuevoHabitat;
  }

  incrementarEdad(): void {
    this.edad += 1;
  }

  mostrarInformacion(): string {
    return `Especie: ${this.especie} | Nombre: ${this.nombre} | Edad: ${this.edad} | Hábitat: ${this.habitat}`;
  }
}
