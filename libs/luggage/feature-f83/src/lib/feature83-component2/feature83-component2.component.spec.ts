import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component2Component } from './feature83-component2.component';

describe('Feature83Component2Component', () => {
  let component: Feature83Component2Component;
  let fixture: ComponentFixture<Feature83Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
