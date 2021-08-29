import { TestBed } from '@angular/core/testing';

import { LoguerService } from './loguer.service';

describe('LoguerService', () => {
  let service: LoguerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoguerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
