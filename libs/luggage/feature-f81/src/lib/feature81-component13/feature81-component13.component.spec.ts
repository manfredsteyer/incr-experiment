import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component13Component } from './feature81-component13.component';

describe('Feature81Component13Component', () => {
  let component: Feature81Component13Component;
  let fixture: ComponentFixture<Feature81Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
