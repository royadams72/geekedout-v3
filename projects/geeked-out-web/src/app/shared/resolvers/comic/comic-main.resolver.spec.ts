import { TestBed } from '@angular/core/testing';

import { ComicMainResolver } from './comic-main.resolver';

describe('ComicMainResolver', () => {
  let resolver: ComicMainResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ComicMainResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
