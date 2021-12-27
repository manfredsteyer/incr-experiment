import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component20Component } from './feature84-component20.component';

describe('Feature84Component20Component', () => {
  let component: Feature84Component20Component;
  let fixture: ComponentFixture<Feature84Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
