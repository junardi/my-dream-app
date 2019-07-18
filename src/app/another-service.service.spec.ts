import { TestBed } from '@angular/core/testing';

import { AnotherServiceService } from './another-service.service';

describe('AnotherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherServiceService = TestBed.get(AnotherServiceService);
    expect(service).toBeTruthy();
  });
});
