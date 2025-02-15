import { TestBed } from '@angular/core/testing';

import { ForbiddenLettersService } from './forbidden-letters.service';

describe('ForbiddenLettersService', () => {
  let service: ForbiddenLettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForbiddenLettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
