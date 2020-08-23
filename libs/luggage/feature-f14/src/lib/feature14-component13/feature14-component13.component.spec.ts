import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component13Component } from './feature14-component13.component';

describe('Feature14Component13Component', () => {
  let component: Feature14Component13Component;
  let fixture: ComponentFixture<Feature14Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
