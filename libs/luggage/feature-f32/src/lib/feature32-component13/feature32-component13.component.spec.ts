import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component13Component } from './feature32-component13.component';

describe('Feature32Component13Component', () => {
  let component: Feature32Component13Component;
  let fixture: ComponentFixture<Feature32Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
