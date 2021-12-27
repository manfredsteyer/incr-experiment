import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component7Component } from './feature50-component7.component';

describe('Feature50Component7Component', () => {
  let component: Feature50Component7Component;
  let fixture: ComponentFixture<Feature50Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
