import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component15Component } from './feature67-component15.component';

describe('Feature67Component15Component', () => {
  let component: Feature67Component15Component;
  let fixture: ComponentFixture<Feature67Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
