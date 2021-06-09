import { TestBed } from '@angular/core/testing';

import { MoviesMainResolver } from './movies-main.resolver';

describe('MoviesMainResolver', () => {
  let resolver: MoviesMainResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MoviesMainResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
