import { TestBed } from '@angular/core/testing';

import { VerifiedIconService } from './verified-icon.service';

describe('VerifiedIconService', () => {
  let service: VerifiedIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifiedIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
