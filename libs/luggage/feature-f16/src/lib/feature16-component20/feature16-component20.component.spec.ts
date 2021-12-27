import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component20Component } from './feature16-component20.component';

describe('Feature16Component20Component', () => {
  let component: Feature16Component20Component;
  let fixture: ComponentFixture<Feature16Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature16Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
