import { TestBed } from '@angular/core/testing';

import { DaService } from './da.service';

describe('DaService', () => {
  let service: DaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
