import { TestBed, inject } from '@angular/core/testing';

import { IssuerService } from './issuer.service';

describe('IssuerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuerService]
    });
  });

  it('should be created', inject([IssuerService], (service: IssuerService) => {
    expect(service).toBeTruthy();
  }));
});
