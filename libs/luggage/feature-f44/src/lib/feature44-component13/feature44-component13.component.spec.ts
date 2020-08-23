import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component13Component } from './feature44-component13.component';

describe('Feature44Component13Component', () => {
  let component: Feature44Component13Component;
  let fixture: ComponentFixture<Feature44Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
