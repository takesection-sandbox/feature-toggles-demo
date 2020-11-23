import { TestBed } from '@angular/core/testing';

import { Label2Service } from './label2.service';

describe('Label2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Label2Service = TestBed.get(Label2Service);
    expect(service).toBeTruthy();
  });
});
