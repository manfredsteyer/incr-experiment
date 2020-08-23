import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component13Component } from './feature55-component13.component';

describe('Feature55Component13Component', () => {
  let component: Feature55Component13Component;
  let fixture: ComponentFixture<Feature55Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
