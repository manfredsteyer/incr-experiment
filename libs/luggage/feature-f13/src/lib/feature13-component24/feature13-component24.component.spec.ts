import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component24Component } from './feature13-component24.component';

describe('Feature13Component24Component', () => {
  let component: Feature13Component24Component;
  let fixture: ComponentFixture<Feature13Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
