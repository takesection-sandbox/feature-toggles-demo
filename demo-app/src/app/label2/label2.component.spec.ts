import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Label2Component } from './label2.component';

describe('Label2Component', () => {
  let component: Label2Component;
  let fixture: ComponentFixture<Label2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Label2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Label2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
