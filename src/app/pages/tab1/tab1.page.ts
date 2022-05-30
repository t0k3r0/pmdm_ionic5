/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GestionSucesosLeerService } from './../../services/gestion-sucesos-leer.service';
import { ICoordenadas, raizIncidentes, incidencias } from './../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {



  apiUrl: string = environment.apiUrl;
  ipUrl: string = environment.ipUrl;
  ipKey: string = environment.ipKey;

  listaSucesos: incidencias[] = [];
  coordenadas: ICoordenadas[] = [];
  latitud: number;
  longitud: number;
  // dis: { (...items: ConcatArray<incidencias>[]): incidencias[]; (...items: (incidencias | ConcatArray<incidencias>)[]): incidencias[] };

  constructor(private obtenerDatos: HttpClient, public gestionSucesosLeer: GestionSucesosLeerService) {
    this.cargarIncidencias();
    this.obtenerDatos.get<any>(this.ipUrl + this.ipKey).subscribe(res => {
      this.latitud = res.latitude;
      this.longitud = res.longitude;

    });

  }

  ngOnInit() { }


  public check(eventoRecibido, item: incidencias) {
    let estado: boolean = eventoRecibido.detail.checked;
    if (estado) {
      this.gestionSucesosLeer.addSuceso(item);
    } else {
      this.gestionSucesosLeer.borrarSuceso(item);
    }

  }


  private cargarIncidencias() {
    // let dis = {} as incidencias;
    // dis.distancia = this.distanciaEnKms(33, 34, 44, 44);
    let respuesta: Observable<raizIncidentes> =
      this.obtenerDatos.get<raizIncidentes>(this.apiUrl);
    respuesta.subscribe(resp => {
      this.listaSucesos.push(...resp.incidences);
    });
    // this.listaSucesos.concat = this.dis;
    // console.log(this.listaSucesos);

  }

  public distanciaEnKms(lat1, lon1, lat2, lon2) {
    let R = 6371;
    let dLat = (lat2 - lat1) * (Math.PI / 180);
    let dLon = (lon2 - lon1) * (Math.PI / 180);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1) * (Math.PI / 180)) * Math.cos((lat2) * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return Math.round(d);
  }


  public buscar(suceso: incidencias): boolean {
    let indice = this.gestionSucesosLeer.buscar(suceso);
    if (indice === -1) {
      return false;
    }
    return true;
  }
}

