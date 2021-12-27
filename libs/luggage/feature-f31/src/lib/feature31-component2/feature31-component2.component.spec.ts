import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component2Component } from './feature31-component2.component';

describe('Feature31Component2Component', () => {
  let component: Feature31Component2Component;
  let fixture: ComponentFixture<Feature31Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
