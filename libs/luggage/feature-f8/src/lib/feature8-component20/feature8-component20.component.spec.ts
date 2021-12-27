import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component20Component } from './feature8-component20.component';

describe('Feature8Component20Component', () => {
  let component: Feature8Component20Component;
  let fixture: ComponentFixture<Feature8Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
