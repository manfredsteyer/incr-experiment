import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component13Component } from './feature53-component13.component';

describe('Feature53Component13Component', () => {
  let component: Feature53Component13Component;
  let fixture: ComponentFixture<Feature53Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
