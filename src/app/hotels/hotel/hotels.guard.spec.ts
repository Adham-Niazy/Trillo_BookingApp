import { TestBed } from '@angular/core/testing';

import { HotelsGuard } from './hotels.guard';

describe('HotelsGuard', () => {
  let guard: HotelsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HotelsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
