import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component7Component } from './feature25-component7.component';

describe('Feature25Component7Component', () => {
  let component: Feature25Component7Component;
  let fixture: ComponentFixture<Feature25Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
