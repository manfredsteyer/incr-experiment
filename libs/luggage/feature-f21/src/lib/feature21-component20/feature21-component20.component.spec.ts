import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component20Component } from './feature21-component20.component';

describe('Feature21Component20Component', () => {
  let component: Feature21Component20Component;
  let fixture: ComponentFixture<Feature21Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
