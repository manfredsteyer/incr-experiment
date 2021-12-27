import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component1Component } from './feature96-component1.component';

describe('Feature96Component1Component', () => {
  let component: Feature96Component1Component;
  let fixture: ComponentFixture<Feature96Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
