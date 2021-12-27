import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component7Component } from './feature84-component7.component';

describe('Feature84Component7Component', () => {
  let component: Feature84Component7Component;
  let fixture: ComponentFixture<Feature84Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
