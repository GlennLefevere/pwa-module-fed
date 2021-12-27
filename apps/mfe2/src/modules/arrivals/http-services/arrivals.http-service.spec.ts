import { TestBed } from '@angular/core/testing';

import { ArrivalsHttpService } from './arrivals.http-service';

describe('ArrivalsHttpService', () => {
  let service: ArrivalsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrivalsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
