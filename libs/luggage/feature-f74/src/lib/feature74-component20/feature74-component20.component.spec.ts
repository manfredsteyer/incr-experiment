import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component20Component } from './feature74-component20.component';

describe('Feature74Component20Component', () => {
  let component: Feature74Component20Component;
  let fixture: ComponentFixture<Feature74Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
