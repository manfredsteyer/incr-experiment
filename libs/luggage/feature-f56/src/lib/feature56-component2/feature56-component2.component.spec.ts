import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component2Component } from './feature56-component2.component';

describe('Feature56Component2Component', () => {
  let component: Feature56Component2Component;
  let fixture: ComponentFixture<Feature56Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
