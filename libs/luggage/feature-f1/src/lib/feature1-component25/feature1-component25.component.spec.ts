import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component25Component } from './feature1-component25.component';

describe('Feature1Component25Component', () => {
  let component: Feature1Component25Component;
  let fixture: ComponentFixture<Feature1Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
