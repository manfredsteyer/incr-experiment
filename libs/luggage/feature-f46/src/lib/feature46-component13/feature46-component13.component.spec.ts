import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component13Component } from './feature46-component13.component';

describe('Feature46Component13Component', () => {
  let component: Feature46Component13Component;
  let fixture: ComponentFixture<Feature46Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
