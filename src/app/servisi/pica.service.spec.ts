import { TestBed } from '@angular/core/testing';

import { PicaService } from './pica.service';

describe('PicaService', () => {
  let service: PicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
