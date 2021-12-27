import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component1Component } from './feature46-component1.component';

describe('Feature46Component1Component', () => {
  let component: Feature46Component1Component;
  let fixture: ComponentFixture<Feature46Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
