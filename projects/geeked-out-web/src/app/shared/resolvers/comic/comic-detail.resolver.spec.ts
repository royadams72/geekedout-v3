import { TestBed } from '@angular/core/testing';

import { ComicDetailResolver } from './comic-detail.resolver';

describe('CategoryResolver', () => {
  let resolver: ComicDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ComicDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
