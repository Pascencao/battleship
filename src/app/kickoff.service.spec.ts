import { TestBed } from '@angular/core/testing';

import { KickoffService } from './kickoff.service';

describe('KickoffService', () => {
  let service: KickoffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KickoffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
