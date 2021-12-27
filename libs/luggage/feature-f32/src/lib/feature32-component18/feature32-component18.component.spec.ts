import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component18Component } from './feature32-component18.component';

describe('Feature32Component18Component', () => {
  let component: Feature32Component18Component;
  let fixture: ComponentFixture<Feature32Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
