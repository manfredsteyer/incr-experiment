import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component20Component } from './feature56-component20.component';

describe('Feature56Component20Component', () => {
  let component: Feature56Component20Component;
  let fixture: ComponentFixture<Feature56Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
