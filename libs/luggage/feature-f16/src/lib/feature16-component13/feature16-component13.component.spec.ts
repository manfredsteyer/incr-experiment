import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component13Component } from './feature16-component13.component';

describe('Feature16Component13Component', () => {
  let component: Feature16Component13Component;
  let fixture: ComponentFixture<Feature16Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
