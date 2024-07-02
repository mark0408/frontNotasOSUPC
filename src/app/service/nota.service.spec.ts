import { TestBed } from '@angular/core/testing';

import { notaService } from './nota.service';

describe('notaService', () => {
  let service: notaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(notaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
