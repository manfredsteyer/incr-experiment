import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component20Component } from './feature23-component20.component';

describe('Feature23Component20Component', () => {
  let component: Feature23Component20Component;
  let fixture: ComponentFixture<Feature23Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
