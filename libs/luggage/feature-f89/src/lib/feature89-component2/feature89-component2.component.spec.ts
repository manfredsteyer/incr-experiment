import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component2Component } from './feature89-component2.component';

describe('Feature89Component2Component', () => {
  let component: Feature89Component2Component;
  let fixture: ComponentFixture<Feature89Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
