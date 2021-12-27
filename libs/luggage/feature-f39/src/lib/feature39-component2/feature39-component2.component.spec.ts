import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component2Component } from './feature39-component2.component';

describe('Feature39Component2Component', () => {
  let component: Feature39Component2Component;
  let fixture: ComponentFixture<Feature39Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
