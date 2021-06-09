import { TestBed } from '@angular/core/testing';

import { MusicDetailResolver } from './music-detail.resolver';

describe('MusicDetailResolver', () => {
  let resolver: MusicDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MusicDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
