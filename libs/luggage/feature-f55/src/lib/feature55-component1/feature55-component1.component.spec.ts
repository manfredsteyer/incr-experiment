import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component1Component } from './feature55-component1.component';

describe('Feature55Component1Component', () => {
  let component: Feature55Component1Component;
  let fixture: ComponentFixture<Feature55Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature55Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
