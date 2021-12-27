import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component2Component } from './feature64-component2.component';

describe('Feature64Component2Component', () => {
  let component: Feature64Component2Component;
  let fixture: ComponentFixture<Feature64Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
