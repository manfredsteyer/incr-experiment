import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component20Component } from './feature82-component20.component';

describe('Feature82Component20Component', () => {
  let component: Feature82Component20Component;
  let fixture: ComponentFixture<Feature82Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
