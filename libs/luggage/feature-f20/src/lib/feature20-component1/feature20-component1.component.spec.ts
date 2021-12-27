import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component1Component } from './feature20-component1.component';

describe('Feature20Component1Component', () => {
  let component: Feature20Component1Component;
  let fixture: ComponentFixture<Feature20Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
