import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component13Component } from './feature82-component13.component';

describe('Feature82Component13Component', () => {
  let component: Feature82Component13Component;
  let fixture: ComponentFixture<Feature82Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
