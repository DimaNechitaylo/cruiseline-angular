import { TestBed } from '@angular/core/testing';

import { CruiseService } from './cruise.service';

describe('CruiseService', () => {
  let service: CruiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    cruise = TestBed.inject(CruiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
