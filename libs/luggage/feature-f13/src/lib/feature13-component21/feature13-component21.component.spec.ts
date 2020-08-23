import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component21Component } from './feature13-component21.component';

describe('Feature13Component21Component', () => {
  let component: Feature13Component21Component;
  let fixture: ComponentFixture<Feature13Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
