import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component13Component } from './feature38-component13.component';

describe('Feature38Component13Component', () => {
  let component: Feature38Component13Component;
  let fixture: ComponentFixture<Feature38Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
