import { TestBed } from '@angular/core/testing';

import { MusicMainResolver } from './music-main.resolver';

describe('MusicMainResolver', () => {
  let resolver: MusicMainResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MusicMainResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
