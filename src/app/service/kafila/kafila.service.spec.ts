import { TestBed } from '@angular/core/testing';

import { KafilaService } from './kafila.service';

describe('KafilaService', () => {
  let service: KafilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KafilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
