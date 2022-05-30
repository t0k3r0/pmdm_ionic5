/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
import { incidencias } from '../interfaces/interfaces';
import { GestionStorageService } from './gestion-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionSucesosLeerService {
  private sucesosLeer: incidencias[] = [];
  // private dis = {} as incidencias;

  constructor(private gestionStorage: GestionStorageService) {
    let datosPromesa: Promise<incidencias[]> = gestionStorage.getObject('sucesosLeer');
    datosPromesa.then(datos => {
      if (datos) {
        this.sucesosLeer.push(...datos);
        // this.sucesosLeer.push(this.dis);
      }
    });

  }

  public buscar(item: incidencias): number {
    let indice: number = this.sucesosLeer.findIndex(
      function(cadaArticulo) {
        return JSON.stringify(cadaArticulo) === JSON.stringify(item);
      }
    );
    return indice;
  }

  public addSuceso(item) {
    let itemString = JSON.stringify(item);
    item = JSON.parse(itemString);

    this.sucesosLeer.push(item);
    this.gestionStorage.setObject('sucesosLeer', this.sucesosLeer);
  }

  public borrarSuceso(item) {
    let indice = this.buscar(item);

    if (indice !== -1) {
      this.sucesosLeer.splice(indice, 1);
      this.gestionStorage.setObject('sucesosLeer', this.sucesosLeer);
    }
  }

  public getSucesos() {
    return this.sucesosLeer;
  }
}
