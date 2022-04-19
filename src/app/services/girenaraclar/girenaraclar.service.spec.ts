import { TestBed } from '@angular/core/testing';

import { GirenaraclarService } from './girenaraclar.service';

describe('GirenaraclarService', () => {
  let service: GirenaraclarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GirenaraclarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
