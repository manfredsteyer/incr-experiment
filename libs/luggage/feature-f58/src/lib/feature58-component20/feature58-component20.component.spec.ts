import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component20Component } from './feature58-component20.component';

describe('Feature58Component20Component', () => {
  let component: Feature58Component20Component;
  let fixture: ComponentFixture<Feature58Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
