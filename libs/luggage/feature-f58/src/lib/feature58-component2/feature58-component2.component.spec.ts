import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component2Component } from './feature58-component2.component';

describe('Feature58Component2Component', () => {
  let component: Feature58Component2Component;
  let fixture: ComponentFixture<Feature58Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
