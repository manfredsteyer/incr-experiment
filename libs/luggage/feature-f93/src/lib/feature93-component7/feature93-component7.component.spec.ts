import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component7Component } from './feature93-component7.component';

describe('Feature93Component7Component', () => {
  let component: Feature93Component7Component;
  let fixture: ComponentFixture<Feature93Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
