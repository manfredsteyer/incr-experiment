import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component13Component } from './feature23-component13.component';

describe('Feature23Component13Component', () => {
  let component: Feature23Component13Component;
  let fixture: ComponentFixture<Feature23Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
