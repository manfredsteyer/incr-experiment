import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component1Component } from './feature93-component1.component';

describe('Feature93Component1Component', () => {
  let component: Feature93Component1Component;
  let fixture: ComponentFixture<Feature93Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
