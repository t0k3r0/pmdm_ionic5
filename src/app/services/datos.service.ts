/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
import { incidencias } from '../interfaces/interfaces';
import { GestionStorageService } from './gestion-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionDatosLeerService {
  // Se crea el array que va almacenar las datos
  private datosLeer: incidencias[] = [];

  constructor(private gestionStorage: GestionStorageService) {
    // Se recuperan los datos que hubiera en Storage
    let datosPromesa: Promise<incidencias[]> = gestionStorage.getObject('datosLeer');
    datosPromesa.then(datos => {
      if (datos) {
        // console.log(datos);
        this.datosLeer.push(...datos);
      }
    });

  }

  // Se busca un artículo en el array
  public buscar(item: incidencias): number {
    let indice: number = this.datosLeer.findIndex(
      function (cadaArticulo) {
        return JSON.stringify(cadaArticulo) === JSON.stringify(item);
      }
    );
    //let indice = this.datosLeer.indexOf(articuloEncontrado);
    return indice;
  }

  // Se añade la suceso al array y se actualiza en Storage
  public addSuceso(item) {
    // copiar item
    let itemString = JSON.stringify(item);
    item = JSON.parse(itemString);

    this.datosLeer.push(item);
    this.gestionStorage.setObject('datosLeer', this.datosLeer);
    // console.log(this.datosLeer);
  }

  // Se busca la suceso en el array y se borra
  public borrarSuceso(item) {
    let indice = this.buscar(item);

    if (indice !== -1) {
      this.datosLeer.splice(indice, 1);
      this.gestionStorage.setObject('datosLeer', this.datosLeer);
    }
    // console.log(this.datosLeer);
  }

  // Devuelve el contenido del array
  public getDatos() {
    return this.datosLeer;
  }
}
