import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component7Component } from './feature64-component7.component';

describe('Feature64Component7Component', () => {
  let component: Feature64Component7Component;
  let fixture: ComponentFixture<Feature64Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
