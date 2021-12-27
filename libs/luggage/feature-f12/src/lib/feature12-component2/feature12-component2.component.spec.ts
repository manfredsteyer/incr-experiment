import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component2Component } from './feature12-component2.component';

describe('Feature12Component2Component', () => {
  let component: Feature12Component2Component;
  let fixture: ComponentFixture<Feature12Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
