import { TestBed } from '@angular/core/testing';

import { PlakalarService } from './plakalar.service';

describe('PlakalarService', () => {
  let service: PlakalarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlakalarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
