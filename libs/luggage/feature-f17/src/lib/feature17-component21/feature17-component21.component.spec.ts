import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component21Component } from './feature17-component21.component';

describe('Feature17Component21Component', () => {
  let component: Feature17Component21Component;
  let fixture: ComponentFixture<Feature17Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
