import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component7Component } from './feature74-component7.component';

describe('Feature74Component7Component', () => {
  let component: Feature74Component7Component;
  let fixture: ComponentFixture<Feature74Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
