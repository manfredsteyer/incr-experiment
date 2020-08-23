import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component7Component } from './feature13-component7.component';

describe('Feature13Component7Component', () => {
  let component: Feature13Component7Component;
  let fixture: ComponentFixture<Feature13Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
