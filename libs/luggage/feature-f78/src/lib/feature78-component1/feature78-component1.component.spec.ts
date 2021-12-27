import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component1Component } from './feature78-component1.component';

describe('Feature78Component1Component', () => {
  let component: Feature78Component1Component;
  let fixture: ComponentFixture<Feature78Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
