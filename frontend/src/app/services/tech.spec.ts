import { TestBed } from '@angular/core/testing';

import { Tech } from './tech';

describe('Tech', () => {
  let service: Tech;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tech);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
