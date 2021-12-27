import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component18Component } from './feature55-component18.component';

describe('Feature55Component18Component', () => {
  let component: Feature55Component18Component;
  let fixture: ComponentFixture<Feature55Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature55Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
