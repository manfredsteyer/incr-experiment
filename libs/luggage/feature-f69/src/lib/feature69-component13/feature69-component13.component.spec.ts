import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component13Component } from './feature69-component13.component';

describe('Feature69Component13Component', () => {
  let component: Feature69Component13Component;
  let fixture: ComponentFixture<Feature69Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
