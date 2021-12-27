import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component20Component } from './feature70-component20.component';

describe('Feature70Component20Component', () => {
  let component: Feature70Component20Component;
  let fixture: ComponentFixture<Feature70Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
