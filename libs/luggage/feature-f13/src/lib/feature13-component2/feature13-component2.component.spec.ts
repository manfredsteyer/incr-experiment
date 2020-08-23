import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component2Component } from './feature13-component2.component';

describe('Feature13Component2Component', () => {
  let component: Feature13Component2Component;
  let fixture: ComponentFixture<Feature13Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
