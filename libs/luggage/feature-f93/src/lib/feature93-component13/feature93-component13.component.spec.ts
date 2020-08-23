import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component13Component } from './feature93-component13.component';

describe('Feature93Component13Component', () => {
  let component: Feature93Component13Component;
  let fixture: ComponentFixture<Feature93Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
