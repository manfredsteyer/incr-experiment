import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component13Component } from './feature41-component13.component';

describe('Feature41Component13Component', () => {
  let component: Feature41Component13Component;
  let fixture: ComponentFixture<Feature41Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
