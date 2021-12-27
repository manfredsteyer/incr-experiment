import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component2Component } from './feature15-component2.component';

describe('Feature15Component2Component', () => {
  let component: Feature15Component2Component;
  let fixture: ComponentFixture<Feature15Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
