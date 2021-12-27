import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component2Component } from './feature0-component2.component';

describe('Feature0Component2Component', () => {
  let component: Feature0Component2Component;
  let fixture: ComponentFixture<Feature0Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
