import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component2Component } from './feature33-component2.component';

describe('Feature33Component2Component', () => {
  let component: Feature33Component2Component;
  let fixture: ComponentFixture<Feature33Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
