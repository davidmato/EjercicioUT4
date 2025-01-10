export class Cliente {
  constructor(public id: number, public nombre: string, public saldo: number) {}

  realizarDeposito(cantidad: number): void {
    this.saldo += cantidad;
  }

  realizarRetiro(cantidad: number): string {
    if (cantidad > this.saldo) {
      return `Fondos insuficientes para realizar el retiro de ${cantidad}€.`;
    }
    this.saldo -= cantidad;
    return `Retiro de ${cantidad}€ realizado con éxito.`;
  }

  mostrarEstado(): string {
    return `Cliente: ${this.nombre} | Saldo: ${this.saldo}€`;
  }
}
