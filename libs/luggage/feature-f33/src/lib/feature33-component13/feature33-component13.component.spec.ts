import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component13Component } from './feature33-component13.component';

describe('Feature33Component13Component', () => {
  let component: Feature33Component13Component;
  let fixture: ComponentFixture<Feature33Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
