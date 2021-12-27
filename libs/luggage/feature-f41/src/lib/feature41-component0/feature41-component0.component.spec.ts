import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component0Component } from './feature41-component0.component';

describe('Feature41Component0Component', () => {
  let component: Feature41Component0Component;
  let fixture: ComponentFixture<Feature41Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
