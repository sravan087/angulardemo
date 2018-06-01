import { TestBed, inject } from '@angular/core/testing';

import { CashticketService } from './cashticket.service';

describe('CashticketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashticketService]
    });
  });

  it('should be created', inject([CashticketService], (service: CashticketService) => {
    expect(service).toBeTruthy();
  }));
});
