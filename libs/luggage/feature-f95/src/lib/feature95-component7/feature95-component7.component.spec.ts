import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component7Component } from './feature95-component7.component';

describe('Feature95Component7Component', () => {
  let component: Feature95Component7Component;
  let fixture: ComponentFixture<Feature95Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
