import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CurrencyPipe, NgFor} from '@angular/common';

@Component({
  selector: 'app-gestionpedidos',
  imports: [
    FormsModule,
    CurrencyPipe,
    NgFor
  ],
  templateUrl: './gestionpedidos.component.html',
  styleUrls: ['./gestionpedidos.component.css']
})
export class GestionpedidosComponent {
  clienteBusqueda: string = '';
  totalMinimo: number = 0;
  pedidos: Pedido[] = [];
  pedidosCliente: Pedido[] = [];
  pedidosFiltrados: Pedido[] = [];
  nuevoPedido: Pedido = new Pedido(0, '', []);

  buscarPedidos(): void {
    this.pedidosCliente = this.restaurante.buscarPedidosPorCliente(this.clienteBusqueda);
  }

  filtrarPedidos(): void {
    this.pedidosFiltrados = this.restaurante.filtrarPedidosPorTotal(this.totalMinimo);
  }

  calcularTotalVentas(): number {
    return this.restaurante.calcularTotalVentas();
  }

  agregarPedido(): void {
    this.restaurante.agregarPedido(this.nuevoPedido);
    this.nuevoPedido = new Pedido(0, '', []); // Reset the form
  }

  private restaurante: Restaurante = new Restaurante();
}

class Plato {
  constructor(
    public id: number,
    public nombre: string,
    public precio: number
  ) {}
}

class Pedido {
  constructor(
    public id: number,
    public cliente: string,
    public platos: Plato[]
  ) {}

  calculaTotal(): number {
    return this.platos.reduce((total, plato) => total + plato.precio, 0);
  }
}

class Restaurante {
  private pedidos: Pedido[] = [];

  agregarPedido(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }

  calcularTotalVentas(): number {
    return this.pedidos.reduce((total, pedido) => total + pedido.calculaTotal(), 0);
  }

  buscarPedidosPorCliente(cliente: string): Pedido[] {
    return this.pedidos.filter(pedido => pedido.cliente === cliente);
  }

  filtrarPedidosPorTotal(minimo: number): Pedido[] {
    return this.pedidos.filter(pedido => pedido.calculaTotal() > minimo);
  }
}
