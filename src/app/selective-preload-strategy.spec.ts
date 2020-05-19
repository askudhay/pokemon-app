import { TestBed } from '@angular/core/testing';

import { SelectivePreloadStrategy } from './selective-preload-strategy';

describe('SelectivePreloadStrategyService', () => {
  let service: SelectivePreloadStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectivePreloadStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
