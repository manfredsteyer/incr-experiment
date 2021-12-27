import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component11Component } from './feature78-component11.component';

describe('Feature78Component11Component', () => {
  let component: Feature78Component11Component;
  let fixture: ComponentFixture<Feature78Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
