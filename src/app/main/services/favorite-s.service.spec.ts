import { TestBed } from '@angular/core/testing';

import { FavoriteSService } from './favorite-s.service';

describe('FavoriteSService', () => {
  let service: FavoriteSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
