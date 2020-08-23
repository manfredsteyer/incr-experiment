import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component7Component } from './feature43-component7.component';

describe('Feature43Component7Component', () => {
  let component: Feature43Component7Component;
  let fixture: ComponentFixture<Feature43Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
