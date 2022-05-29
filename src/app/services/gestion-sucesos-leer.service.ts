/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
import { Incidence } from '../interfaces/interfaces';
import { GestionStorageService } from './gestion-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionSucesosLeerService {
  // Se crea el array que va almacenar las sucesos
  private sucesosLeer: Incidence[] = [];

  constructor(private gestionStorage: GestionStorageService) {
    // Se recuperan los datos que hubiera en Storage
    let datosPromesa: Promise<Incidence[]> = gestionStorage.getObject('sucesosLeer');
    datosPromesa.then(datos => {
      if (datos) {
        // console.log(datos);
        this.sucesosLeer.push(...datos);
      }
    });

  }

  // Se busca un artículo en el array
  public buscar(item: Incidence): number {
    let indice: number = this.sucesosLeer.findIndex(
      function (cadaArticulo) {
        return JSON.stringify(cadaArticulo) === JSON.stringify(item);
      }
    );
    //let indice = this.sucesosLeer.indexOf(articuloEncontrado);
    return indice;
  }

  // Se añade la suceso al array y se actualiza en Storage
  public addSuceso(item) {
    // copiar item
    let itemString = JSON.stringify(item);
    item = JSON.parse(itemString);

    this.sucesosLeer.push(item);
    this.gestionStorage.setObject('sucesosLeer', this.sucesosLeer);
    // console.log(this.sucesosLeer);
  }

  // Se busca la suceso en el array y se borra
  public borrarSuceso(item) {
    let indice = this.buscar(item);

    if (indice !== -1) {
      this.sucesosLeer.splice(indice, 1);
      this.gestionStorage.setObject('sucesosLeer', this.sucesosLeer);
    }
    // console.log(this.sucesosLeer);
  }

  // Devuelve el contenido del array
  public getSucesos() {
    return this.sucesosLeer;
  }
}
