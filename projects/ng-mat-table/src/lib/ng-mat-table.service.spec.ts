import { TestBed } from '@angular/core/testing';

import { NgMatTableService } from './ng-mat-table.service';

describe('NgMatTableService', () => {
  let service: NgMatTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMatTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
