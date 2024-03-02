import { TestBed } from '@angular/core/testing';

import { BienEssentielService } from './bien-essentiel.service';

describe('BienEssentielService', () => {
  let service: BienEssentielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienEssentielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
