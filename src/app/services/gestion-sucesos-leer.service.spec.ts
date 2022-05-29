import { TestBed } from '@angular/core/testing';

import { GestionSucesosLeerService } from './gestion-sucesos-leer.service';

describe('GestionSucesosLeerService', () => {
  let service: GestionSucesosLeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSucesosLeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
