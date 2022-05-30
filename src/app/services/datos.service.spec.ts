import { TestBed } from '@angular/core/testing';

import { GestionDatosLeerService } from './datos.service';

describe('GestionDatosLeerService', () => {
  let service: GestionDatosLeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDatosLeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
