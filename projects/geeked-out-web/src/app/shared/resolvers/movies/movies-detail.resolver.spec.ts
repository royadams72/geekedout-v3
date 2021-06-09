import { TestBed } from '@angular/core/testing';

import { MoviesDetailResolver } from './movies-detail.resolver';

describe('MoviesDetailResolver', () => {
  let resolver: MoviesDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MoviesDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
