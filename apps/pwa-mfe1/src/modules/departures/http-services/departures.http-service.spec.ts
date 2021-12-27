import { TestBed } from '@angular/core/testing';

import { DeparturesHttpService } from './departures.http-service';

describe('DeparturesHttpService', () => {
  let service: DeparturesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeparturesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
