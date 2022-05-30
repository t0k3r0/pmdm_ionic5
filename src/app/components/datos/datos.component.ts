import { ipData } from '../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {
  @Input() listaDatos: ipData[];

  constructor() { }

  ngOnInit() { }

}
