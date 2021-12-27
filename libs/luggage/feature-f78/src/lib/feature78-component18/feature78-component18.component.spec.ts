import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component18Component } from './feature78-component18.component';

describe('Feature78Component18Component', () => {
  let component: Feature78Component18Component;
  let fixture: ComponentFixture<Feature78Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
