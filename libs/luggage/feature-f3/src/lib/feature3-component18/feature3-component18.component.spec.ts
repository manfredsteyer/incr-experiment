import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component18Component } from './feature3-component18.component';

describe('Feature3Component18Component', () => {
  let component: Feature3Component18Component;
  let fixture: ComponentFixture<Feature3Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
