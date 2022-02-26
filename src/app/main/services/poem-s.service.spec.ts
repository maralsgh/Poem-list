import { TestBed } from '@angular/core/testing';

import { PoemSService } from './poem-s.service';

describe('PoemSService', () => {
  let service: PoemSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoemSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
