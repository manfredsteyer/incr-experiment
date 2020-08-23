import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component20Component } from './feature95-component20.component';

describe('Feature95Component20Component', () => {
  let component: Feature95Component20Component;
  let fixture: ComponentFixture<Feature95Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
