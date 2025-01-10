import { Component, OnInit } from '@angular/core';
import { Animal } from '../Clases/Animal';
import { Zoologico } from '../Clases/Zoologico';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-zoologico-virtual',
  templateUrl: './zoologico-virtual.component.html',
  imports: [
    FormsModule, NgFor
  ],
  standalone: true,
  styleUrls: ['./zoologico-virtual.component.css']
})
export class ZoologicoVirtualComponent implements OnInit {
  zoologico: Zoologico = new Zoologico();
  especie: string = '';
  nombre: string = '';
  edad: number = 0;
  habitat: string = '';
  nuevoHabitat: string = '';
  mensaje: string = '';
  animalesPorEspecie: Animal[] = [];
  animalesPorHabitat: Animal[] = [];

  ngOnInit(): void {
    const animal1 = new Animal('Tigre', 'Bony', 5, 'Sabana');
    const animal2 = new Animal('Elefante', 'Dumbo', 10, 'Selva');
    const animal3 = new Animal('Leon', 'Simba', 3, 'Sabana');

    this.zoologico.agregarAnimal(animal1);
    this.zoologico.agregarAnimal(animal2);
    this.zoologico.agregarAnimal(animal3);
  }

  agregarAnimal(): void {
    const nuevoAnimal = new Animal(this.especie, this.nombre, this.edad, this.habitat);
    this.zoologico.agregarAnimal(nuevoAnimal);
    this.mensaje = `Animal agregado: ${nuevoAnimal.mostrarInformacion()}`;
  }

  cambiarHabitat(animal: Animal, nuevoHabitat: string): void {
    animal.cambiarHabitat(nuevoHabitat);
    this.mensaje = `Hábitat cambiado: ${animal.mostrarInformacion()}`;
  }

  incrementarEdad(animal: Animal): void {
    animal.incrementarEdad();
    this.mensaje = `Edad incrementada: ${animal.mostrarInformacion()}`;
  }

  buscarAnimalesPorEspecie(): void {
    this.animalesPorEspecie = this.zoologico.buscarAnimalesPorEspecie(this.especie);
  }

  mostrarAnimalesPorHabitat(): void {
    this.animalesPorHabitat = this.zoologico.mostrarAnimalesPorHabitat(this.habitat);
  }

  obtenerAnimales(): Animal[] {
    return this.zoologico.animales;
  }
}
