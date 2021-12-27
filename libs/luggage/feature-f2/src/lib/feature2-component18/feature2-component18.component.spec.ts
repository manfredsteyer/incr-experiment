import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component18Component } from './feature2-component18.component';

describe('Feature2Component18Component', () => {
  let component: Feature2Component18Component;
  let fixture: ComponentFixture<Feature2Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
