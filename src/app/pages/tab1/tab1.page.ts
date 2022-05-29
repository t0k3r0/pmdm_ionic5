import { ipData } from './../../interfaces/interfaces';
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GestionSucesosLeerService } from './../../services/gestion-sucesos-leer.service';
import { RootObject, Incidence } from './../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  categorias: string[] = ['general', 'business', 'technology', 'science', 'sports'];


  apiUrl: string = environment.apiUrl;
  ipUrl: string = environment.ipUrl;

  // Creo e inicializo un array vacío
  listaSucesos: Incidence[] = [];
  listaDatos: ipData[] = [];

  constructor(private obtenerDatos: HttpClient, private obtenerIp: HttpClient, public gestionSucesosLeer: GestionSucesosLeerService) {
    // this.cargarFichero();
    this.cargarIncidencias(this.categorias[0]);
  }

  ngOnInit() {

  }


  public check(eventoRecibido, item: Incidence) {
    let estado: boolean = eventoRecibido.detail.checked;
    if (estado) {
      this.gestionSucesosLeer.addSuceso(item);
    } else {
      this.gestionSucesosLeer.borrarSuceso(item);
    }

  }

  // En función de la categoría elegida se realiza la consulta REST correspondiente
  public cambiarCategoria(eventoRecibido) {
    this.listaSucesos = [];
    this.cargarIncidencias(eventoRecibido.detail.value);
  }

  // Se realiza la consulta REST de una categoría
  // Se concatena la URL, la categoría y la apiKey
  private cargarIncidencias(categoria: string) {
    let respuesta: Observable<RootObject> =
    this.obtenerDatos.get<RootObject>('https://api.euskadi.eus/traffic/v1.0/incidences/');

    // let respuestaDatos: Observable<ipData> =
    //   this.obtenerIp.get<ipData>('https://api.ipbase.com/v1/json/');

    respuesta.subscribe(resp => {
      this.listaSucesos.push(...resp.incidences);
    });
    // respuestaDatos.subscribe(resp => {
    //   this.listaDatos.push(...resp.ipData);
    // });
  }

  // Comprueba si un artículo está en la lista para leer
  // Devuelve true o false para marcar el check
  public buscar(articulo: Incidence): boolean {
    let indice = this.gestionSucesosLeer.buscar(articulo);
    if (indice === -1) {
      return false;
    }
    return true;
  }
}
