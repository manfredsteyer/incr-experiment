import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component13Component } from './feature96-component13.component';

describe('Feature96Component13Component', () => {
  let component: Feature96Component13Component;
  let fixture: ComponentFixture<Feature96Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
