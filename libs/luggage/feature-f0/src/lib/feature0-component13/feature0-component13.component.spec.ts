import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component13Component } from './feature0-component13.component';

describe('Feature0Component13Component', () => {
  let component: Feature0Component13Component;
  let fixture: ComponentFixture<Feature0Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
