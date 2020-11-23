import { TestBed } from '@angular/core/testing';

import { Label1Service } from './label1.service';

describe('Label1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Label1Service = TestBed.get(Label1Service);
    expect(service).toBeTruthy();
  });
});
