import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component0Component } from './feature24-component0.component';

describe('Feature24Component0Component', () => {
  let component: Feature24Component0Component;
  let fixture: ComponentFixture<Feature24Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
