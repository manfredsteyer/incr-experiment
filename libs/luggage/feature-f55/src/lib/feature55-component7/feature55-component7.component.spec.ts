import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component7Component } from './feature55-component7.component';

describe('Feature55Component7Component', () => {
  let component: Feature55Component7Component;
  let fixture: ComponentFixture<Feature55Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature55Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
