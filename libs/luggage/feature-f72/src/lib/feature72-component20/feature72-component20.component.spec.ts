import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component20Component } from './feature72-component20.component';

describe('Feature72Component20Component', () => {
  let component: Feature72Component20Component;
  let fixture: ComponentFixture<Feature72Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
