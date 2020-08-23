import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component13Component } from './feature25-component13.component';

describe('Feature25Component13Component', () => {
  let component: Feature25Component13Component;
  let fixture: ComponentFixture<Feature25Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
