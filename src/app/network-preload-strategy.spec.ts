import { TestBed } from '@angular/core/testing';

import { NetworkPreloadStrategy } from './network-preload-strategy';

describe('NetworkPreloadStrategyService', () => {
  let service: NetworkPreloadStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkPreloadStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
