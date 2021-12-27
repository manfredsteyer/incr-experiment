import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component1Component } from './feature23-component1.component';

describe('Feature23Component1Component', () => {
  let component: Feature23Component1Component;
  let fixture: ComponentFixture<Feature23Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
