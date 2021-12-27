import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component20Component } from './feature41-component20.component';

describe('Feature41Component20Component', () => {
  let component: Feature41Component20Component;
  let fixture: ComponentFixture<Feature41Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
