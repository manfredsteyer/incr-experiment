import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component18Component } from './feature91-component18.component';

describe('Feature91Component18Component', () => {
  let component: Feature91Component18Component;
  let fixture: ComponentFixture<Feature91Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
