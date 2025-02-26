import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CatalogoPeliculasComponent} from './catalogo-peliculas/catalogo-peliculas.component';
import {GestionpedidosComponent} from './gestion-pedidos/gestionpedidos.component';
import {DatosMeteorologicosComponent} from './datos-meteorologicos/datos-meteorologicos.component';
import {BibliotecaPalabrasComponent} from './biblioteca-palabras/biblioteca-palabras.component';
import {BancoClientesComponent} from './banco-clientes/banco-clientes.component';
import {ZoologicoVirtualComponent} from './zoologico-virtual/zoologico-virtual.component';
import {
  TransformacionListadoProductosComponent
} from './transformacion-listado-productos/transformacion-listado-productos.component';
import {ClasificacionPalabrasComponent} from './clasificacion-palabras/clasificacion-palabras.component';
import {SistemaVehiculosComponent} from './sistema-vehiculos/sistema-vehiculos.component';
import {SistemaEmpleadosComponent} from './sistema-empleados/sistema-empleados.component';
import {FiguraGeometricaComponent} from './figura-geometrica/figura-geometrica.component';
import {SistemaPagosComponent} from './sistema-pagos/sistema-pagos.component';

@Component({
  selector: 'app-root',
  imports: [CatalogoPeliculasComponent, GestionpedidosComponent, DatosMeteorologicosComponent, BibliotecaPalabrasComponent, BancoClientesComponent, ZoologicoVirtualComponent, TransformacionListadoProductosComponent, ClasificacionPalabrasComponent, SistemaVehiculosComponent, SistemaEmpleadosComponent, FiguraGeometricaComponent, SistemaPagosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjercicioUT4';
}
