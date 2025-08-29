import { TestBed } from '@angular/core/testing';

import { SpecSheetService } from './spec-sheet-service';

describe('SpecSheetService', () => {
  let service: SpecSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
