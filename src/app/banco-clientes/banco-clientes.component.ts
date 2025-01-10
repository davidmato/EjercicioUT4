import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clases/Cliente';
import { Banco } from '../Clases/Banco';
import { FormsModule } from '@angular/forms';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-banco-clientes',
  templateUrl: './banco-clientes.component.html',
  imports: [
    FormsModule, NgFor
  ],
  styleUrls: ['./banco-clientes.component.css'],
  standalone: true
})
export class BancoClientesComponent implements OnInit {
  banco: Banco = new Banco();
  clienteId: number = 0;
  cantidad: number = 0;
  mensaje: string = '';

  ngOnInit(): void {
    // Adding clients
    const cliente1 = new Cliente(1, 'Ana', 500);
    const cliente2 = new Cliente(2, 'Luis', 300);
    const cliente3 = new Cliente(3, 'Maria', 700);

    this.banco.agregarCliente(cliente1);
    this.banco.agregarCliente(cliente2);
    this.banco.agregarCliente(cliente3);
  }

  realizarDeposito(): void {
    const cliente = this.banco.buscarClientePorId(this.clienteId);
    if (cliente) {
      cliente.realizarDeposito(this.cantidad);
      this.mensaje = cliente.mostrarEstado();
    } else {
      this.mensaje = 'Cliente no encontrado.';
    }
  }

  realizarRetiro(): void {
    const cliente = this.banco.buscarClientePorId(this.clienteId);
    if (cliente) {
      this.mensaje = cliente.realizarRetiro(this.cantidad);
    } else {
      this.mensaje = 'Cliente no encontrado.';
    }
  }

  calcularSaldoTotal(): void {
    const saldoTotal = this.banco.calcularSaldoTotal();
    this.mensaje = `Saldo total del banco: ${saldoTotal}€`;
  }

  obtenerClientes(): Cliente[] {
    return this.banco.clientes;
  }
}
