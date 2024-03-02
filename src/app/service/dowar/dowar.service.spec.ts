import { TestBed } from '@angular/core/testing';

import { DowarService } from './dowar.service';

describe('DowarService', () => {
  let service: DowarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DowarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
