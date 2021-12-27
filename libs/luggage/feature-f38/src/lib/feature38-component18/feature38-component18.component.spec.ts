import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component18Component } from './feature38-component18.component';

describe('Feature38Component18Component', () => {
  let component: Feature38Component18Component;
  let fixture: ComponentFixture<Feature38Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
