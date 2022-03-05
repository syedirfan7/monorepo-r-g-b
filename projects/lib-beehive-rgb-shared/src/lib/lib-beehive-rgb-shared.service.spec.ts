import { TestBed } from '@angular/core/testing';

import { LibBeehiveRGBSharedService } from './lib-beehive-rgb-shared.service';

describe('LibBeehiveRGBSharedService', () => {
  let service: LibBeehiveRGBSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBeehiveRGBSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
