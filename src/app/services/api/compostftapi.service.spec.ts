import { TestBed } from '@angular/core/testing';

import { CompostftapiService } from './compostftapi.service';

describe('CompostftapiService', () => {
  let service: CompostftapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompostftapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
