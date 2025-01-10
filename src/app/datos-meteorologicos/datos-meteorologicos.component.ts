import { Component } from '@angular/core';
import {NgFor} from '@angular/common';

type Dia = {
  fecha: string;
  temperatura: number;
  humedad: number;
  precipitacion: number;
};

@Component({
  selector: 'app-datos-meteorologicos',
  imports: [NgFor],
  templateUrl: './datos-meteorologicos.component.html',
  styleUrls: ['./datos-meteorologicos.component.css']
})
export class DatosMeteorologicosComponent {
  dias: Dia[] = [
    { fecha: '2025-01-01', temperatura: 20, humedad: 60, precipitacion: 5 },
    { fecha: '2025-01-02', temperatura: 22, humedad: 55, precipitacion: 0 },
    { fecha: '2025-01-03', temperatura: 18, humedad: 70, precipitacion: 10 },
    { fecha: '2025-01-04', temperatura: 25, humedad: 50, precipitacion: 0 },
    { fecha: '2025-01-05', temperatura: 21, humedad: 65, precipitacion: 2 },
  ];

  calcularTemperaturaPromedio(): number {
    const totalTemperatura = this.dias.reduce((acc, dia) => acc + dia.temperatura, 0);
    return totalTemperatura / this.dias.length;
  }

  filtrarDiasConLluvia(): Dia[] {
    return this.dias.filter(dia => dia.precipitacion > 0);
  }

  encontrarDiaConTemperaturaMasAlta(): Dia {
    return this.dias.reduce((max, dia) => (dia.temperatura > max.temperatura ? dia : max));
  }

  resumenDelMes(): string {
    const diasConLluvia = this.filtrarDiasConLluvia();
    const maxTemp = this.encontrarDiaConTemperaturaMasAlta().temperatura;
    const tempPromedio = this.calcularTemperaturaPromedio();

    return `Resumen del Mes:
Días con lluvia: ${diasConLluvia.length}
Máxima temperatura: ${maxTemp}ºC
Temperatura promedio: ${tempPromedio.toFixed(2)}ºC`;
  }
}
