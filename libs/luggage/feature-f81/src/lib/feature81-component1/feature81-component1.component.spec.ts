import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component1Component } from './feature81-component1.component';

describe('Feature81Component1Component', () => {
  let component: Feature81Component1Component;
  let fixture: ComponentFixture<Feature81Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
