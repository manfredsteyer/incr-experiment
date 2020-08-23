import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component20Component } from './feature25-component20.component';

describe('Feature25Component20Component', () => {
  let component: Feature25Component20Component;
  let fixture: ComponentFixture<Feature25Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
