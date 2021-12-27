import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component1Component } from './feature10-component1.component';

describe('Feature10Component1Component', () => {
  let component: Feature10Component1Component;
  let fixture: ComponentFixture<Feature10Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
