import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component13Component } from './feature48-component13.component';

describe('Feature48Component13Component', () => {
  let component: Feature48Component13Component;
  let fixture: ComponentFixture<Feature48Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
