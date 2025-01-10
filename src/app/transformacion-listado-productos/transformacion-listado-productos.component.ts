import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-transformacion-listado-productos',
  templateUrl: './transformacion-listado-productos.component.html',
  styleUrls: ['./transformacion-listado-productos.component.css'],
  imports:[FormsModule, NgFor]
})
export class TransformacionListadoProductosComponent {
  productos = [
    { nombre: "Pan", precio: 3, categoria: "alimentos" },
    { nombre: "Leche", precio: 7, categoria: "alimentos" },
    { nombre: "Jabón", precio: 2, categoria: "higiene" },
    { nombre: "Escoba", precio: 11, categoria: "limpieza" },
  ];

  nombresProductosMayorA10 = this.productos
    .filter(producto => producto.precio > 10)
    .map(producto => producto.nombre);

  alimentos = this.productos.filter(producto => producto.categoria === "alimentos");
  precioPromedioAlimentos = this.alimentos.reduce((acc, producto) => acc + producto.precio, 0) / this.alimentos.length;

  productosConDescuento = this.productos.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9
  }));
}
