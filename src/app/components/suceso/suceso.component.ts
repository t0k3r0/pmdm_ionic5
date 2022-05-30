import { GestionSucesosLeerService } from '../../services/gestion-sucesos-leer.service';
import { incidencias } from '../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-suceso',
  templateUrl: './suceso.component.html',
  styleUrls: ['./suceso.component.scss'],
})
export class SucesoComponent implements OnInit {
  @Input() suceso: incidencias;

  constructor(private gestionSucesosLeer: GestionSucesosLeerService, private alertController: AlertController) { }

  ngOnInit() { }

  public onClick() {
    this.confirmarBorrar();

  }

  async confirmarBorrar() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Borrar suceso?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            this.gestionSucesosLeer.borrarSuceso(this.suceso);
          }
        }
      ]
    });

    await alert.present();
  }

}
