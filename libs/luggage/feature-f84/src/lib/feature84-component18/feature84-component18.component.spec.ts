import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component18Component } from './feature84-component18.component';

describe('Feature84Component18Component', () => {
  let component: Feature84Component18Component;
  let fixture: ComponentFixture<Feature84Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
