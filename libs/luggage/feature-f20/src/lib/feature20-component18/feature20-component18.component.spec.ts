import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component18Component } from './feature20-component18.component';

describe('Feature20Component18Component', () => {
  let component: Feature20Component18Component;
  let fixture: ComponentFixture<Feature20Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
