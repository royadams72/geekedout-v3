import { TestBed } from '@angular/core/testing';

import { GamesDetailResolver } from './games-detail.resolver';

describe('GamesDetailResolver', () => {
  let resolver: GamesDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GamesDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
