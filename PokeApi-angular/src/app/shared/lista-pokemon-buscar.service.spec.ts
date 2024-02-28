import { TestBed } from '@angular/core/testing';

import { ListaPokemonBuscarService } from './lista-pokemon-buscar.service';

describe('ListaPokemonBuscarService', () => {
  let service: ListaPokemonBuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPokemonBuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
