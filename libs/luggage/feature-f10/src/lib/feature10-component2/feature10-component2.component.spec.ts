import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component2Component } from './feature10-component2.component';

describe('Feature10Component2Component', () => {
  let component: Feature10Component2Component;
  let fixture: ComponentFixture<Feature10Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
