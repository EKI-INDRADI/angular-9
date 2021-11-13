import { TestBed } from '@angular/core/testing';

import { ArrListService } from './arr-list.service';

describe('ArrListService', () => {
  let service: ArrListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
