import { TestBed } from '@angular/core/testing';

import { GamesMainResolver } from './games-main.resolver';

describe('GamesMainResolver', () => {
  let resolver: GamesMainResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GamesMainResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
