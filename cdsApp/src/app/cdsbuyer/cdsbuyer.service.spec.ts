import { TestBed, inject } from '@angular/core/testing';

import { CdsbuyerService } from './cdsbuyer.service';

describe('CdsbuyerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CdsbuyerService]
    });
  });

  it('should be created', inject([CdsbuyerService], (service: CdsbuyerService) => {
    expect(service).toBeTruthy();
  }));
});
