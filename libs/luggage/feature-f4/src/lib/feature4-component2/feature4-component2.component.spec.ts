import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component2Component } from './feature4-component2.component';

describe('Feature4Component2Component', () => {
  let component: Feature4Component2Component;
  let fixture: ComponentFixture<Feature4Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
