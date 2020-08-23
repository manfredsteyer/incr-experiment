import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component20Component } from './feature43-component20.component';

describe('Feature43Component20Component', () => {
  let component: Feature43Component20Component;
  let fixture: ComponentFixture<Feature43Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
