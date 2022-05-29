import { GestionSucesosLeerService } from './../../services/gestion-sucesos-leer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public gestionSucesosLeer: GestionSucesosLeerService) {

  }

}
