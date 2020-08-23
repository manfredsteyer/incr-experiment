import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component13Component } from './feature74-component13.component';

describe('Feature74Component13Component', () => {
  let component: Feature74Component13Component;
  let fixture: ComponentFixture<Feature74Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
