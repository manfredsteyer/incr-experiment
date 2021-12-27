import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component14Component } from './feature78-component14.component';

describe('Feature78Component14Component', () => {
  let component: Feature78Component14Component;
  let fixture: ComponentFixture<Feature78Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
