import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component13Component } from './feature10-component13.component';

describe('Feature10Component13Component', () => {
  let component: Feature10Component13Component;
  let fixture: ComponentFixture<Feature10Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
