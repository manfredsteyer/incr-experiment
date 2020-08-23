import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component20Component } from './feature13-component20.component';

describe('Feature13Component20Component', () => {
  let component: Feature13Component20Component;
  let fixture: ComponentFixture<Feature13Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
