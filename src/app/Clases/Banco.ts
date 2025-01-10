import {Cliente} from './Cliente';

export class Banco {
  clientes: Cliente[] = [];

  agregarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  buscarClientePorId(id: number): Cliente | undefined {
    return this.clientes.find((cliente) => cliente.id === id);
  }

  calcularSaldoTotal(): number {
    return this.clientes.reduce((total, cliente) => total + cliente.saldo, 0);
  }
}
