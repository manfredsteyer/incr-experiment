import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component13Component } from './feature70-component13.component';

describe('Feature70Component13Component', () => {
  let component: Feature70Component13Component;
  let fixture: ComponentFixture<Feature70Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
