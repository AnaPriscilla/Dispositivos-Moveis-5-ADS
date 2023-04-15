import { TestBed } from '@angular/core/testing';

import { ListContService } from './list-cont.service';

describe('ListContService', () => {
  let service: ListContService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListContService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
