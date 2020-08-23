import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component0Component } from './feature13-component0.component';

describe('Feature13Component0Component', () => {
  let component: Feature13Component0Component;
  let fixture: ComponentFixture<Feature13Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
