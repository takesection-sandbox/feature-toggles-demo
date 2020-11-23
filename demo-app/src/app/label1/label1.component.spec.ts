import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Label1Component } from './label1.component';

describe('Label1Component', () => {
  let component: Label1Component;
  let fixture: ComponentFixture<Label1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Label1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Label1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
