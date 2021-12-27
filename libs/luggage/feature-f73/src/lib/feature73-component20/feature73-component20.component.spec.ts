import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component20Component } from './feature73-component20.component';

describe('Feature73Component20Component', () => {
  let component: Feature73Component20Component;
  let fixture: ComponentFixture<Feature73Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
