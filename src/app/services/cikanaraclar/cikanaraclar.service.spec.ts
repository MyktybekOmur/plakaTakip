import { TestBed } from '@angular/core/testing';

import { CikanaraclarService } from './cikanaraclar.service';

describe('CikanaraclarService', () => {
  let service: CikanaraclarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CikanaraclarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
