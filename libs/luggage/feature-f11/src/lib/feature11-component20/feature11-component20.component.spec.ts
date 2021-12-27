import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component20Component } from './feature11-component20.component';

describe('Feature11Component20Component', () => {
  let component: Feature11Component20Component;
  let fixture: ComponentFixture<Feature11Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
