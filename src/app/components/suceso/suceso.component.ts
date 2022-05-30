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
  @Input() suceso: incidencias;    // Se le pasa este valor al usar el componente

  constructor(private gestionSucesosLeer: GestionSucesosLeerService, private alertController: AlertController) { }

  ngOnInit() {}

  // Al pulsar sobre borrar se abre una alerta para confirmarlo
  public onClick() {
    this.confirmarBorrar();

  }

  // Mensaje de alerta para confirmar el borrado
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
            // console.log('Confirm Okay');
            this.gestionSucesosLeer.borrarSuceso(this.suceso);     // Se llama al servicio que gestiona las sucesos para leer y borrarla
          }
        }
      ]
    });

    await alert.present();
  }

}
