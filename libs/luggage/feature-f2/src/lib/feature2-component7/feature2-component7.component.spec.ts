import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component7Component } from './feature2-component7.component';

describe('Feature2Component7Component', () => {
  let component: Feature2Component7Component;
  let fixture: ComponentFixture<Feature2Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
