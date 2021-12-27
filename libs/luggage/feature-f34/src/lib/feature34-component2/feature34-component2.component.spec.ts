import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component2Component } from './feature34-component2.component';

describe('Feature34Component2Component', () => {
  let component: Feature34Component2Component;
  let fixture: ComponentFixture<Feature34Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
