import { TestBed } from '@angular/core/testing';

import { EmplService } from './empl-service.service';

describe('EmplServiceService', () => {
  let service: EmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
