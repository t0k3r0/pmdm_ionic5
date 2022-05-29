import { Incidence } from '../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucesos',
  templateUrl: './sucesos.component.html',
  styleUrls: ['./sucesos.component.scss'],
})
export class SucesosComponent implements OnInit {
  @Input() listaSucesos: Incidence[];      // Se recibe este valor cuando se usa el componente

  constructor() { }

  ngOnInit() {}

}
