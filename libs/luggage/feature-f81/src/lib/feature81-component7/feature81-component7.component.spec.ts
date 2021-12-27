import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component7Component } from './feature81-component7.component';

describe('Feature81Component7Component', () => {
  let component: Feature81Component7Component;
  let fixture: ComponentFixture<Feature81Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
